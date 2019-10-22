import React, { useState } from "react";
import "./App.css";
import NewTask from "./Components/NewTask";
import List from "./Components/List";

const App = () => {
  const [list, setList] = useState([])

  
  return (
    <div className="App">
      <h1>My to-do list:</h1>
      <NewTask add={newTask => setList([...list, newTask])} />
      <List tasks={list} />
    </div>
  );
}
export default App;
