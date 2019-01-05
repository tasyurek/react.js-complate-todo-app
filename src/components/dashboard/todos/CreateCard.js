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
    this.state.active
      ? (cardStyle = "col s12 m3 card createcard white")
      : (cardStyle = "col s12 m3 card createcard yellw");

    return (
      <div className={cardStyle}>
        {!this.state.active && (
          <div className="card-content" onClick={this.handleClick}>
            Add Card
          </div>
        )}
        {this.state.active && (
          <div className="card-action input-field">
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.input}
            />
            <div
              className="btn yellw"
              onClick={() => {
                this.props.createCard(this.state.input);
                this.setState({ input: "", active: false });
              }}
            >
              Add
            </div>
            <div className="btn red right" onClick={this.handleClick}>
              Cancel
            </div>
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
