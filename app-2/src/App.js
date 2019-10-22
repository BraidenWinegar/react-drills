import React, { useState } from "react";
import "./App.css";
import List from './Components/List'

const App =() => {

  const [foods, setFoods] = useState(['apples', 'peaches', 'pie', 'cobbler', 'tia curry', 'grilled cheese sandwich', 'soup',  'chowder']);
  
  return (
    <div className="App">
      <List foods={foods}/>
    </div>
  );
}

export default App;
