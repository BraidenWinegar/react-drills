import React, { useState } from "react";
import "./App.css";
import Todo from './Components/Todo';

function App () {
  
  const [list, setList] = useState([]);
  const [userInput, setUserInput] = useState('')

  const addListItem = () => {    
    setList( [...list, userInput])
    setUserInput('')
  }

  let mappedList = list.map((e,i) => <Todo key={i} task={e} />)

  return (
    <div className="App">
      <h1>My to-do list:</h1>

      <div>
        <input
          value={userInput}
          onChange={e => setUserInput(e.target.value)} 
          placeholder="Enter new task" 
        />
        <button onClick={()=>{
          setList( [...list, userInput]); 
          setUserInput('');}} 
        >
          Add
        </button>
      </div>
      {mappedList}
    </div>
  );
}

export default App;
