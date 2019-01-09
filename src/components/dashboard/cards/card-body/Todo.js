import React, { Component } from "react";

class Todo extends Component {
  render() {
    console.log(this.props.todo);
    return (
      <div className="todo">
        <p>{this.props.todo.content}</p>
      </div>
    );
  }
}

export default Todo;
