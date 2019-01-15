import React, { Component } from "react";
import CardList from "./cards/CardList";

export class Content extends Component {
  render() {
    return (
      <div id="content">
        <CardList />
      </div>
    );
  }
}

export default Content;
