import React, { Component } from "react";
import deleteCard from "../../../../store/actions/deleteCard";
import { connect } from "react-redux";

export class DeleteCard extends Component {
  state = { show: false };

  handleNo = () => {
    this.setState({ show: false });
  };

  render() {
    const cardId = this.props.cardId;

    const deleteQuestion = this.state.show ? (
      <div>
        <p>Are you sure?</p>
        <button
          className="button"
          onClick={() => {
            this.props.deleteCard(cardId);
          }}
        >
          Yes
        </button>
        <button className="button right" onClick={this.handleNo}>
          No
        </button>
      </div>
    ) : null;

    return (
      <div>
        <i
          className="far fa-trash-alt icon"
          onClick={() => {
            // this.props.deleteCard(cardId);
            this.setState({ show: true });
          }}
        />
        {deleteQuestion}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteCard: cardId => dispatch(deleteCard(cardId))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(DeleteCard);
