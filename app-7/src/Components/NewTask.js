import React, { useState } from "react";

function NewTask (props) {
  
  const [input, setInput] = useState('')

  const handleAdd = () => {
    
  }
  
  return (
    <div>
      <input
        value={input}
        placeholder="Enter new task"
        onChange={e => setInput(e.target.value)}
      />

      <button onClick={() => {
        props.add(input); 
        setInput('')}}
      > 
        Add 
      </button>
    </div>
  );

}

export default NewTask;