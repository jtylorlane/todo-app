import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false, todos: [], text: "" };
  }

  handleOnChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };
  onClickHandler = (e) => {
    console.log(this.state.text);
    //populate array of todos with text
    //.push()
    const text = this.state.text;
    const newState = [...this.state.todos];
    console.log(this.state.todos);
    newState.push(text);
    console.log("newState", newState);
    //set the state
    this.setState({
      text: "",
      todos: newState // newstate goes here, how do i annote it, I'm so dumb it was literally just newState
    });
  };

  handleClick = (index) => {
console.log("index", index);
this.delete();
 }

 delete = (index) => {
  console.log("this will be deleted", index);
  const newTodos = [...this.state.todos]
  newTodos.splice(index, 1);
  this.setState({ 
    todos: newTodos});
 }

  render() {
    return (
      <div className="App">
        <h1>ToDo</h1>
        <input value={this.state.text} onChange={this.handleOnChange} />
        <p>{this.state.text}</p>
        <button onClick={this.onClickHandler}>add</button>
        {this.state.todos.map((item,i) => <li key={i} onClick={() => this.handleClick(i)}>{item}</li>)}
      </div>
    );
  }
}

export default App;
