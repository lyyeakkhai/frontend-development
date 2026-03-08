import React from "react";
function App() {
  /* You will need to use a boolean state to manage the weather */
  const [isSunny, setIsSunny] = React.useState(true);

  function onSunClick() {
    // Complete this code when we click on Sunny Time
    setIsSunny(true);
  }

  function onRainClick() {
    // Complete this code when we click on Rain Time
    setIsSunny(false);
  }

  function getTitle() {
    // This function manage the H1 text, depending on the weather
    return isSunny ? "It's Sunny!" : "It's Raining!";
  }

  function getBackgroundColor() {
    // This function manage the main class value, depending on the weather
    return isSunny ? "sunny" : "rainy";
  }

  return (
    <main className={getBackgroundColor()}>
      <h1>{getTitle()}</h1>
      <button onClick={onSunClick}>Sunny Time</button>
      <button onClick={onRainClick}>Rain Time</button>
    </main>
  );
}

export default App;
