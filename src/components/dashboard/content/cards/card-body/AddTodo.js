import React, { Component } from "react";
import { connect } from "react-redux";
import addTodo from "../../../../../store/actions/addTodo";

export class AddTodo extends Component {
  state = { content: "", show: false, error: "" };

  handleClick = () => {
    this.setState(prevState => ({ show: !prevState.show }));
  };

  handleCancel = () => {
    this.setState(prevState => ({
      show: !prevState.show,
      content: "",
      error: ""
    }));
  };

  handleChange = e => {
    this.setState({ content: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.content.trim()) {
      this.props.addTodo(this.state.content, this.props.cardId);
      this.setState({ content: "", show: false, error: "" });
    } else {
      this.setState({ error: "It should not be empty!", show: true });
    }
  };

  render() {
    const error = this.state.error;

    const addTodo = this.state.show ? (
      <form onSubmit={this.handleSubmit}>
        <div className="input-field">
          <textarea onChange={this.handleChange} value={this.state.content} />
        </div>
        <div className="input-field">
          <button className="button light" type="submit">
            Add
          </button>
          <button className="button light right" onClick={this.handleCancel}>
            Cancel
          </button>
        </div>
        <div className="error-field">
          <span className="warn-text">{this.state.error && error}</span>
        </div>
      </form>
    ) : (
      <div>
        <i className="fas fa-plus-circle icon" onClick={this.handleClick} />
      </div>
    );

    return <div className="add-todo">{addTodo}</div>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (content, cardId) => dispatch(addTodo(content, cardId))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddTodo);
