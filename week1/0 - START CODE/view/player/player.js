// DOMS ELEMENTS  ---------------------------------------------------------
const dom_quizContainer = document.querySelector("#quizContainer");
const dom_quiz = document.querySelector(".quiz");
const dom_question = document.querySelector("#question");
const dom_choiceA = document.querySelector("#A");
const dom_choiceB = document.querySelector("#B");
const dom_choiceC = document.querySelector("#C");
const dom_choiceD = document.querySelector("#D");
const dom_scoreContainer = document.querySelector("#scoreContainer");
const dom_start = document.querySelector("#start");
const dom_startButton = document.querySelector("#startButton");

// Event Listeners
dom_startButton.addEventListener("click", onStart);
dom_choiceA.addEventListener("click", () => onPlayerSubmit("A"));
dom_choiceB.addEventListener("click", () => onPlayerSubmit("B"));
dom_choiceC.addEventListener("click", () => onPlayerSubmit("C"));
dom_choiceD.addEventListener("click", () => onPlayerSubmit("D"));
// DATA  ---------------------------------------------------------
function getData(key, defaultValue = null) {
  try {
    const raw = localStorage.getItem(key);
    return raw === null ? defaultValue : JSON.parse(raw);
  } catch {
    return defaultValue;
  }
}
let questions = getData("questions", []);
let runningQuestionIndex = 0;
let score = 0;

// FUNCTIONS ---------------------------------------------------------

// Hide a given element
function hide(element) {
  // TODO
  element.style.display = "none";
}

function show(element) {
  // TODO
  element.style.display = "block";
}

function onStart() {
  // Render the current question
  // Display the quiz view,
  hide(dom_start);
  show(dom_quizContainer);
  show(dom_quiz);
  renderQuestion();
}

function renderQuestion() {
  // Render the current question on the quiz view
  let q = questions[runningQuestionIndex];
  dom_question.textContent = q.title;
  dom_choiceA.textContent = q.choiceA;
  dom_choiceB.textContent = q.choiceB;
  dom_choiceC.textContent = q.choiceC;
  dom_choiceD.textContent = q.choiceD;
}

function onPlayerSubmit(answerKey) {
  // Check answer and display result
  const currentQuestion = questions[runningQuestionIndex];
  const isCorrect = answerKey === currentQuestion.correct;
  
  // Update score if correct
  if (isCorrect) {
    score += 20;
  }
  
  // Display result with image
  displayResult(isCorrect, score);
  
  // Move to next question or show final score after delay
  setTimeout(() => {
    runningQuestionIndex++;
    if (runningQuestionIndex < questions.length) {
      hide(dom_scoreContainer);
      renderQuestion();
      show(dom_quiz);
    } else {
      displayFinalScore();
    }
  }, 3000);

}

function displayResult(isCorrect, currentScore) {
  // Hide quiz and show result
  hide(dom_quiz);
  
  const resultImage = currentScore < 20 
    ? "/img/20.png" : currentScore < 40
    ? "/img/40.png"  : currentScore < 60
    ? "/img/60.png"  : currentScore < 80
    ? "/img/80.png"  : "/img/100.png";
  
  const resultMessage = isCorrect ? "Correct!" : "Incorrect!";
  
  dom_scoreContainer.innerHTML = `
    <div class="text-center p-5 flex flex-col items-center justify-center">
      <img src="${resultImage}" alt="${resultMessage}" style="width: 150px; height: 150px; margin: 20px 0;" />
      <h2 style="font-size: 24px; margin: 10px 0;">${resultMessage}</h2>
      <p style="font-size: 18px; color: #666;">Current Score: <strong>${currentScore}</strong></p>
    </div>
  `;
  
  show(dom_scoreContainer);
}

function displayFinalScore() {
  // Display final score
  hide(dom_quiz);
  
  dom_scoreContainer.innerHTML = `
    <div style="text-align: center; padding: 40px;">
      <h2 style="font-size: 32px; margin: 20px 0;">Quiz Completed!</h2>
      <p style="font-size: 24px; margin: 20px 0;">Your Final Score: <strong>${score}</strong> / ${questions.length * 3}</p>
      <button onclick="location.reload()" style="padding: 10px 20px; font-size: 16px; background-color: #8b5cf6; color: white; border: none; border-radius: 5px; cursor: pointer;">Play Again</button>
    </div>
  `;
  
  show(dom_scoreContainer);
}

// INITIALIZATION ---------------------------------------------------------
show(dom_start);
hide(dom_quiz);
hide(dom_scoreContainer);
