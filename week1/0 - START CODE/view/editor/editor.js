document.addEventListener('DOMContentLoaded', () => {
  const STORAGE_KEY = 'questions';
  const createBtn = document.getElementById('createQuestion');
  const section = document.querySelector('.create-new-question');
  const form = document.getElementById('createForm');
  const cancelBtn = document.getElementById('cancelBtn');
  const list = document.getElementById('questionsList');
  const addBtn = document.getElementById('addBtn');
  let editingId = null;

  function loadQuestions() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch (e) {
      return [];
    }
  }

  function saveQuestions(qs) {
    // ensure we save in the shape expected by quiz.js (title, choiceA..D, correct)
    const normalized = qs.map(q => {
      // if already in expected shape (has title), keep fields
      if (q && q.title) return q;
      // support old shape: {id, text, answers:[], correct}
      return {
        id: q.id || Date.now(),
        title: q.text || q.title || '',
        choiceA: (q.answers && q.answers[0]) || q.choiceA || '',
        choiceB: (q.answers && q.answers[1]) || q.choiceB || '',
        choiceC: (q.answers && q.answers[2]) || q.choiceC || '',
        choiceD: (q.answers && q.answers[3]) || q.choiceD || '',
        correct: (q.correct || q.correctAnswer || '').toString().toUpperCase()
      };
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
  }

  function renderQuestions() {
    const qs = loadQuestions();
    list.innerHTML = '';
    if (!qs.length) {
      const p = document.createElement('p');
      p.className = 'text-gray-500';
      p.textContent = 'No questions yet';
      list.appendChild(p);
      return;
    }

    const labels = ['A', 'B', 'C', 'D'];
    qs.forEach((q, idx) => {
      const card = document.createElement('div');
      card.className = 'p-4 bg-white rounded shadow flex justify-between items-start';

      const body = document.createElement('div');
      const h = document.createElement('h3');
      h.className = 'font-semibold';
      const title = q.title || q.text || '';
      h.textContent = `${idx + 1}. ${title}`;
      body.appendChild(h);

      const ul = document.createElement('ul');
      ul.className = 'mt-2 list-disc ml-5 space-y-1';
      const answers = q.answers || [q.choiceA, q.choiceB, q.choiceC, q.choiceD];
      (answers || []).forEach((ans, i) => {
        const li = document.createElement('li');
        const label = labels[i] || '';
        li.textContent = `${label}. ${ans || ''}` + ( (q.correct && q.correct.toUpperCase() === label) ? ' (Correct)' : '');
        ul.appendChild(li);
      });
      body.appendChild(ul);

      const actions = document.createElement('div');
      actions.className = 'flex flex-col gap-2 ml-4';

      const edit = document.createElement('button');
      edit.textContent = 'Edit';
      edit.className = 'px-3 py-1 bg-yellow-400 rounded';
      edit.addEventListener('click', () => startEdit(q.id));

      const del = document.createElement('button');
      del.textContent = 'Delete';
      del.className = 'px-3 py-1 bg-red-400 text-white rounded';
      del.addEventListener('click', () => deleteQuestion(q.id));

      actions.appendChild(edit);
      actions.appendChild(del);

      card.appendChild(body);
      card.appendChild(actions);
      list.appendChild(card);
    });
  }

  createBtn.addEventListener('click', () => {
    section.classList.remove('hidden');
    renderQuestions();
    section.scrollIntoView({ behavior: 'smooth' });
  });

  cancelBtn.addEventListener('click', (e) => {
    e.preventDefault();
    section.classList.add('hidden');
    form.reset();
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = document.getElementById('newQuestionText').value.trim();
    const a1 = document.getElementById('answer1').value.trim();
    const a2 = document.getElementById('answer2').value.trim();
    const a3 = document.getElementById('answer3').value.trim();
    const a4 = document.getElementById('answer4').value.trim();
    const correct = document.getElementById('correctAnswer').value.trim().toUpperCase();

    if (!text || !a1 || !a2 || !a3 || !a4 || !['A', 'B', 'C', 'D'].includes(correct)) {
      alert('Please fill all fields and set correct answer as A, B, C or D');
      return;
    }

    const qs = loadQuestions();
    if (editingId) {
      const i = qs.findIndex(x => x.id === editingId);
      if (i > -1) {
        qs[i] = { id: editingId, text, answers: [a1, a2, a3, a4], correct };
      }
      editingId = null;
      addBtn.textContent = 'Add Question';
    } else {
      qs.push({ id: Date.now(), text, answers: [a1, a2, a3, a4], correct });
    }
    saveQuestions(qs);
    form.reset();
    renderQuestions();
  });

  function startEdit(id) {
    const qs = loadQuestions();
    const q = qs.find(x => x.id === id);
    if (!q) return;
    editingId = id;
    document.getElementById('newQuestionText').value = q.title || q.text || '';
    document.getElementById('answer1').value = (q.answers && q.answers[0]) || q.choiceA || '';
    document.getElementById('answer2').value = (q.answers && q.answers[1]) || q.choiceB || '';
    document.getElementById('answer3').value = (q.answers && q.answers[2]) || q.choiceC || '';
    document.getElementById('answer4').value = (q.answers && q.answers[3]) || q.choiceD || '';
    document.getElementById('correctAnswer').value = q.correct || '';
    section.classList.remove('hidden');
    addBtn.textContent = 'Save';
    section.scrollIntoView({ behavior: 'smooth' });
  }

  function deleteQuestion(id) {
    if (!confirm('Delete this question?')) return;
    const qs = loadQuestions().filter(x => x.id !== id);
    saveQuestions(qs);
    renderQuestions();
  }

  // initial render
  renderQuestions();
});
