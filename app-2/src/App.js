import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from './Components/List'

class App extends Component {
  constructor () {
    super();
    this.state = {
      foods: ['apples', 'peaches', 'pie', 'cobbler', 'tia curry', 'grilled cheese sandwich', 'soup',  'chowder']
    }
  }
  render() {
    return (
      <div className="App">
        <List foods={this.state.foods}/>
      </div>
    );
  }
}

export default App;
