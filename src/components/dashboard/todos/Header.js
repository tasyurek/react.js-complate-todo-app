import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    const cardId = this.props.cardId;
    let todos = this.props.todos;
    // return filtered todos by card id
    todos = todos.filter(todo => todo.cardId === cardId);
    // mapping filtered todos
    const todoList = todos.map(todo => {
      return (
        <div key={todo.id}>
          <div key={todo.id}>{todo.todo}</div>
        </div>
      );
    });
    return <div>{todoList}</div>;
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todoReducer,
    cards: state.cardReducer
  };
};

export default connect(
  mapStateToProps,
  null
)(Header);
