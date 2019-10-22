import React, { useState } from "react";
import "./App.css";
import Longin from "./Components/Longin";

const App = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
 
  return (
    <div className="App">
      <Longin updateName={val => setName(val)} 
      updatePassword={val => setPassword(val)} 
      name={name} 
      password={password}/>
    </div>
  );
}

export default App;
