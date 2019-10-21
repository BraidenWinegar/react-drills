import React, { Component } from "react";
import "./App.css";
import TextBoxAndWords from './Components/TextBoxAndWords'

class App extends Component {
  constructor(){
    super();
    this.state = {
      textInput: '',
      displayText: ''
    }
  }

  updateText = (val) => {
    this.setState({
      displayText: val,
      textInput: val
    })
  }


  render() {
    return (
      <div className="App">
        <TextBoxAndWords 
          update={this.updateText}
          val={this.state.displayText}
        />
      </div>
    );
  }
}

export default App;
