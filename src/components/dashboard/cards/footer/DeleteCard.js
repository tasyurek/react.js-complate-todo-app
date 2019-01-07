import React, { Component } from "react";
import { connect } from "react-redux";
import deleteCard from "../../../../store/actions/deleteCard";

export class DeleteCard extends Component {
  state = { show: false };

  handleNo = () => {
    this.setState({ show: false });
  };

  render() {
    const deleteQuestion = this.state.show ? (
      <div>
        <p>Are you sure?</p>
        <button
          className="button"
          onClick={() => {
            this.props.deleteCard(this.props.cardId);
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
