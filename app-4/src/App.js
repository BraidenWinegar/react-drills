import React, { Component } from "react";
import "./App.css";
import Longin from "./Components/Longin";

class App extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      password: ''
    }
  }

  handleChangeName = (name) => {
    this.setState ({
      name: name
    })
  }

  handleChangePassword = (password) => {
    this.setState ({
      password: password
    })
  }

  render() {
    console.log(this.state.name)
    console.log(this.state.password)

    return (
      <div className="App">
        <Longin updateName={this.handleChangeName} 
        updatePassword={this.handleChangePassword} 
        name={this.state.name} 
        password={this.state.password}/>
      </div>
    );
  }
}

export default App;
