import React, { useState } from "react";
import "./App.css";
import TextBoxAndWords from './Components/TextBoxAndWords'

const App = () => {

  const [textInput, setTextInput] = useState('')

  return (
    <div className="App">
      <TextBoxAndWords 
        update={val => setTextInput(val)}
        val={textInput}
      />
    </div>
  );
}

export default App;
