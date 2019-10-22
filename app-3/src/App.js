import React, { useState } from "react";
import "./App.css";
import Editor from './Components/Editor'


const App = () => {
  
  const [textIn, setTextIn] = useState('')
  const [list, setList] = useState(['apples', 'peaches', 'pie', 'cobbler', 'tia curry', 'grilled cheese sandwich', 'soup', 'sausage',  'chowder'])

  return (
    <div className="App">
      <Editor update={e => setTextIn(e)} 
        list={list} 
        textIn={textIn}/>
    </div>
  );
}

export default App;
