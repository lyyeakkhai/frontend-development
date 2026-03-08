import { useState } from "react";
function App() {
  /* You will need to use a boolean state to keep the value of the text entered */
  const [text, setText] = useState("");

  /* You will need a function to handle a key pressed on the first input and update the state*/
  function onTextChange(e) {
    e.preventDefault();
    setText(() => e.target.value);
  }
  return (
    <main>
      <h1>Upper Case Converter</h1>
      <label>Enter any text !</label>
      <input onChange={onTextChange} />

      <p>
        <label>Here is the text in upper case</label>

        {/* This input will need to display the text entered in upper case */}
        <input value={text.toUpperCase()} disabled />
      </p>
    </main>
  );
}

export default App;
