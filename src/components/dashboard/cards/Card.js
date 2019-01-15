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
          <CardBody id={this.props.id} />
          <CardFooter id={this.props.id} />
        </div>
      </div>
    );
  }
}

export default Card;
