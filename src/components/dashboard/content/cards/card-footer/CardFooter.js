import React, { Component } from "react";
import DeleteCard from "./DeleteCard";

class Footer extends Component {
  render() {
    return (
      <div className="card-footer">
        <div className="card-actions">
          <DeleteCard id={this.props.id} />
        </div>
      </div>
    );
  }
}

export default Footer;
