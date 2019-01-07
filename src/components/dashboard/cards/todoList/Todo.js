import React, { Component } from "react";

class Todo extends Component {
  render() {
    return (
      <div className="todo">
        <p>{this.props.todo}</p>
      </div>
    );
  }
}

export default Todo;
