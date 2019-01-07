import React, { Component } from "react";
import TodoList from "./todoList/TodoList";
import Footer from "./footer/Footer";
import Header from "./header/Header";

class Card extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <Header title={this.props.title} />
          <TodoList cardId={this.props.cardId} />
          <Footer cardId={this.props.cardId} />
        </div>
      </div>
    );
  }
}

export default Card;
