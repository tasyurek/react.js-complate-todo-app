import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./Card";
import CreateCard from "./CreateCard";

class CardList extends Component {
  render() {
    const pId = this.props.projectId;
    const cards = this.props.cards;

    let cardList = cards.filter(card => card.pId === pId);

    cardList = cardList.map(card => {
      return (
        <div key={card.id}>
          <Card title={card.title} id={card.id} />
        </div>
      );
    });

    return (
      <div className="content">
        <h3>Cards</h3>
        <div className="card-list">
          {cardList}
          <CreateCard pId={pId} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cards: state.cardReducer,
    projectId: state.projectFilterReducer
  };
};

export default connect(
  mapStateToProps,
  null
)(CardList);
