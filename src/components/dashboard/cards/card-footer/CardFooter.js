import React, { Component } from "react";
import DeleteCard from "./DeleteCard";

class Footer extends Component {
  render() {
    return (
      <div className="card-footer">
        <div className="card-actions">
          <DeleteCard cardId={this.props.cardId} />
        </div>
      </div>
    );
  }
}

export default Footer;
