import React, { Component } from "react";
import { connect } from "react-redux";
import deleteCard from "../../../../../store/actions/deleteCard";

export class DeleteCard extends Component {
  state = { show: false };

  handleNo = () => {
    this.setState({ show: false });
  };

  render() {
    const deleteQuestion = this.state.show ? (
      <div className="form">
        <div className="title-bar">
          <p>Are you sure?</p>
        </div>
        <div className="button-bar">
          <button
            className="button"
            onClick={() => {
              this.props.deleteCard(this.props.id);
            }}
          >
            Yes
          </button>
          <button className="button right" onClick={this.handleNo}>
            No
          </button>
        </div>
      </div>
    ) : (
      <i
        className="far fa-trash-alt icon right"
        onClick={() => {
          // this.props.deleteCard(cardId);
          this.setState({ show: true });
        }}
      />
    );
    return <div className="card-delete-action">{deleteQuestion}</div>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteCard: id => dispatch(deleteCard(id))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(DeleteCard);
