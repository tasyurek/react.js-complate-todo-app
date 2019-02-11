import React, { Component } from "react";
import createCard from "../../../../store/actions/createCard";
import { connect } from "react-redux";

class AddCard extends Component {
  state = {
    input: "",
    active: false,
    error: ""
  };

  handleClick = () => {
    this.setState(previousState => ({
      active: !previousState.active,
      input: "",
      error: ""
    }));
  };

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.input.trim()) {
      this.props.createCard(this.props.pId, this.state.input);
      this.setState({ input: "", active: false });
    } else this.setState({ error: "It should not be empty!" });
  };

  render() {
    const cardStyle = this.state.active ? "add-card" : "";
    return (
      <div className={cardStyle}>
        {this.state.active ? (
          <form onSubmit={this.handleSubmit}>
            <h4 className="form-header">Add Card</h4>
            <div className="input-field">
              <input
                type="text"
                onChange={this.handleChange}
                value={this.state.input}
              />
            </div>
            <div className="input-field">
              <input type="submit" className="button light" value="Add" />
              <button className="button light right" onClick={this.handleClick}>
                Cancel
              </button>
            </div>
            <span className="warn-text">{this.state.error}</span>
          </form>
        ) : (
          <button className="button dark" onClick={this.handleClick}>
            Add Card
          </button>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createCard: (pId, title) => dispatch(createCard(pId, title))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddCard);
