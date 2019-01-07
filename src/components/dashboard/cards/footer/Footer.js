import React, { Component } from "react";
import DeleteCard from "./DeleteCard";

class Footer extends Component {
  render() {
    return (
      <div className="cardFooter">
        <DeleteCard cardId={this.props.cardId} />
      </div>
    );
  }
}

export default Footer;
