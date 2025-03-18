import React, {useState} from "react";
function App() {
  /* You will need to use a boolean state to keep the value of the text entered */
  /* I don know why suggest boolean*/
  const [input, setInput] = useState("")
  /* You will need a function to handle a key pressed on the first input and update the state*/
  function onKeyPress(event){
    setInput(i => event.target.value);
  }
  return (
    <main>
      <h1>Upper Case Converter</h1>

      <label>Enter any text !</label>
      <input onChange={onKeyPress}/>

      <p>
        <label>Here is the text in upper case</label>

        {/* This input will need to display the text entered in lower case */}
        <input disabled value={input.toUpperCase()}/>
      </p>
    </main>
  );
}

export default App;
