import React, {useState} from "react";
function App() {
  /* You will need to use a boolean state to manage the weather */
  const [isRaining, setisRaning] = useState(false) /*sunny initially*/

  function onSunClick() {
    // Complete this code when we click on Sunny Time
    isRaining ? setisRaning(i => !i) : "";
  }

  function onRainClick() {
    // Complete this code when we click on Sunny Time
    !isRaining ? setisRaning(i => !i) : "";
  }

  function getTitle() {
    // This function manage the H1 text, depending on the weather
    return (isRaining ? "RAIN TIME!" : "SUN TIME");
  }

  function getBackgroundColor() {
    // This function manage the main class value, depending on the weather
    return (isRaining ? "rainy" : "sunny");
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
