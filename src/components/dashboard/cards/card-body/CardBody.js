import React, { Component } from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import AddTodo from "./AddTodo";

class TodoList extends Component {
  render() {
    const cardId = this.props.id;
    let todos = this.props.todos;

    // return filtered todos by card id
    todos = todos.filter(todo => todo.cardId === cardId);

    // mapping filtered todos
    const todoList = todos.map(todo => {
      return (
        <div key={todo.id}>
          <Todo key={todo.id} todo={todo} />
        </div>
      );
    });
    return (
      <div className="card-body">
        <div className="todo-list">{todoList}</div>
        <div className="todo-actions">
          <AddTodo cardId={cardId} />
        </div>
      </div>
    );
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
)(TodoList);
