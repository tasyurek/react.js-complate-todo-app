import React, { Component } from "react";
import { connect } from "react-redux";
import addTodo from "../../../../store/actions/addTodo";

export class AddTodo extends Component {
  state = { content: "", show: false };

  handleClick = () => {
    this.setState(prevState => ({ show: !prevState.show }));
  };

  handleChange = e => {
    this.setState({ content: e.target.value });
  };

  render() {
    const input = this.state.show ? (
      <div>
        <textarea onChange={this.handleChange} value={this.state.content} />
        <div className="buttonBar">
          <button
            className="button"
            onClick={() => {
              this.props.addTodo(this.state.content, this.props.cardId);
              this.setState({ content: "", show: false });
            }}
          >
            Add
          </button>
          <i className="fas fa-times icon right" onClick={this.handleClick} />
        </div>
      </div>
    ) : (
      <i className="fas fa-plus-circle icon" onClick={this.handleClick} />
    );

    return <div>{input}</div>;
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
