import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./Card";

class CardList extends Component {
  render() {
    const cards = this.props.cards;
    const cardList = cards.map(card => {
      return (
        <div key={card.cardId}>
          <Card title={card.title} cardId={card.cardId} />
        </div>
      );
    });

    return <div>{cardList}</div>;
  }
}

const mapStateToProps = state => {
  return {
    cards: state.cardReducer
  };
};

export default connect(
  mapStateToProps,
  null
)(CardList);
