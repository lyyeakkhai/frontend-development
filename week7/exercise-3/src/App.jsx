import React from "react";
import { useState } from "react";

function App() {
  /* You will need to use many state to keep the input values and other needs */
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState(false);

  /* You will need some function to handle the key pressed and button events */
  function onA(e) {
    setA(e.target.value);

  }

  function onB(e) {
    setB(e.target.value);
  }

  function validateInput() {
    if (isNaN(a) || isNaN(b)) {
      return true;
    } else {
      return false;
    }
  }

  function onCompute(e) {
    e.preventDefault();
    if(validateInput()){
      setError(true);
      setResult("A and B should be numbers");
      return;
    }
    setError(false);
    setResult(Number(a) + Number(b));
  }

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onKeyUp={onA} />

      <label>B =</label>
      <input onKeyUp={onB} />

      <label>A + B =</label>

      {/* When Compute buton is clicked, thiscls input display the sum of the 2 numbers, or the error message in RED */}
      <input disabled value={result} className={error ? "error" : ""} />
      <button onClick={onCompute}>Compute</button>
    </main>
  );
}

export default App;
