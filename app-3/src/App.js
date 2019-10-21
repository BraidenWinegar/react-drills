import React, { Component } from "react";
import "./App.css";
import Editor from './Components/Editor'


class App extends Component {
  constructor (){
    super();
    this.state = {
      textIn: '',
      list: ['apples', 'peaches', 'pie', 'cobbler', 'tia curry', 'grilled cheese sandwich', 'soup',  'chowder'],
    }
  }

  handelChange = (val) => {
    this.setState({
      textIn: val
    })
  }

  render() {

    return (
      <div className="App">
        <Editor update={this.handelChange} 
          list={this.state.list} 
          textIn={this.state.textIn}/>
      </div>
    );
  }
}

export default App;
