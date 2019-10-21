import React, { Component } from "react";
import "./App.css";
import Todo from './Components/Todo';

class App extends Component {
  constructor (){
    super();
    this.state ={
      list: [],
      userInput: ''
    };

    console.log(this.state.list)

    // this.addListItem = this.addListItem.bind(this);
  }

  handleChange(val){
    this.setState({userInput: val})
    // console.log(this.state.userInput)
  }

  addListItem = () => {
    // console.log(this.state.userInput, 'addList')
    this.setState({
      list: [...this.state.list, this.state.userInput],
      userInput: ''
    })
    console.log(this.state)
  }

  render() {
    // console.log(this.state.list)

    let list = this.state.list.map((e,i) => {
    return <Todo key={i} task={e} />})

    // console.log(list)
    return (
      <div className="App">
        <h1>My to-do list:</h1>

        <div>
          <input
            value={this.state.input}
            onChange={e => this.handleChange(e.target.value)} 
            placeholder="Enter new task" 
          />
          <button onClick={this.addListItem} >Add</button>
        </div>
        {list}
      </div>
    );
  }
}

export default App;
