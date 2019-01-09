import React, { Component } from "react";
import CardBody from "./card-body/CardBody";
import CardFooter from "./card-footer/CardFooter";
import CardHeader from "./card-header/CardHeader";

class Card extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <CardHeader title={this.props.title} />
          <CardBody cardId={this.props.cardId} />
          <CardFooter cardId={this.props.cardId} />
        </div>
      </div>
    );
  }
}

export default Card;
