import React, { Component } from "react";
import deleteTodo from "../../../../store/actions/deleteTodo.js";
import { connect } from "react-redux";

class Todo extends Component {
  state = { hover: false };

  mouseEnter = () => {
    this.setState({ hover: true });
  };

  mouseLeave = () => {
    this.setState({ hover: false });
  };

  handleClick = () => {
    this.props.deleteTodo(this.props.todo.id);
    console.log("delete todo", this.props.todo.id);
  };

  render() {
    const deleteIcon = this.state.hover && (
      <i
        className="fas fa-minus-circle delete-icon right"
        onClick={this.handleClick}
      />
    );

    return (
      <div
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
        className="todo"
      >
        <div className="todo-content">
          <span className="todo-header">{this.props.todo.content}</span>
          <span className="todo-action">{deleteIcon}</span>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteTodo: id => {
      dispatch(deleteTodo(id));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Todo);
