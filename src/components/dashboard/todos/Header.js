import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    const todos = this.props.todos;
    const cards = this.props.cards;

    const todoList = todos.map(todo => {
      return (
        <div key={todo.id}>
          {todo.cardId === this.props.cardId && (
            <div key={todo.id}>{todo.todo}</div>
          )}
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
