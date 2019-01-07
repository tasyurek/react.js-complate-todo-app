import React, { Component } from "react";
import createCard from "../../../store/actions/createCard";
import { connect } from "react-redux";

class CreateCard extends Component {
  state = {
    input: "",
    active: false
  };

  handleClick = () => {
    this.setState(previousState => ({ active: !previousState.active }));
  };

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  render() {
    let cardStyle;
    this.state.active ? (cardStyle = "card") : (cardStyle = "");

    return (
      <div className={cardStyle}>
        {!this.state.active && (
          <button className="button" onClick={this.handleClick}>
            Add Card
          </button>
        )}
        {this.state.active && (
          <div>
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.input}
            />
            <button
              className="button"
              onClick={() => {
                this.props.createCard(this.state.input);
                this.setState({ input: "", active: false });
              }}
            >
              Add
            </button>
            <button className="button right" onClick={this.handleClick}>
              Cancel
            </button>
          </div>
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
