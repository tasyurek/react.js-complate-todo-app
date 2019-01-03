import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

class Card extends Component {
  render() {
    return (
      <div>
        <div className="col s12 m3 offset-m1 card">
          <div className="card-content">
            <span className="card-title"> {this.props.title}</span>
            <Header cardId={this.props.cardId} />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
