export default function StuffForm({ addStuff }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const form = event.target;
    const name = form[0].value;
    const price = parseFloat(form[1].value);
    const newStuff = { name, price };
    addStuff(newStuff);
    form.reset();
  };

  return (
    <form className="stuff-form" onSubmit={handleSubmit}>
      <p>Stuff name</p>
      <input type="search" placeholder="Banana" />

      <p>Stuff price</p>
      <input type="search" placeholder="15" />

      <button>Add Stuff</button>
    </form>
  );
}
