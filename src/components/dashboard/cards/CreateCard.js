import React, { Component } from "react";
import createCard from "../../../store/actions/createCard";
import { connect } from "react-redux";

class CreateCard extends Component {
  state = {
    input: "",
    active: false
  };

  handleClick = () => {
    this.setState(previousState => ({
      active: !previousState.active,
      input: ""
    }));
  };

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createCard(this.state.input);
    this.setState({ input: "", active: false });
  };

  render() {
    let cardStyle;
    this.state.active ? (cardStyle = "add-card") : (cardStyle = "");

    return (
      <div className={cardStyle}>
        {!this.state.active && (
          <button className="button" onClick={this.handleClick}>
            Add Card
          </button>
        )}
        {this.state.active && (
          <form className="form" onSubmit={this.handleSubmit}>
            <div className="title-bar">Card title</div>
            <div className="input-bar">
              <input
                type="text"
                onChange={this.handleChange}
                value={this.state.input}
              />
            </div>
            <div className="button-bar">
              <input type="submit" className="button" value="Add" />
              <button className="button right" onClick={this.handleClick}>
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createCard: title => dispatch(createCard(title))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateCard);
