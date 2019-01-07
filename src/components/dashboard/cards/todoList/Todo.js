import React, { Component } from "react";

class Todo extends Component {
  render() {
    console.log(this.props.todo);
    return (
      <div className="todo">
        <p className="todoContent">{this.props.todo.content}</p>
        <span> </span>
      </div>
    );
  }
}

export default Todo;
