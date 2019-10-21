import React, { Component } from "react";
import "./App.css";
import NewTask from "./Components/NewTask";
import List from "./Components/List";

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    };
  }

  addTask = (task) => {
    this.setState({ list: [...this.state.list, task] });
  }

  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <NewTask add={this.addTask} />
        <List tasks={this.state.list} />
      </div>
    );
  }
}

export default App;
