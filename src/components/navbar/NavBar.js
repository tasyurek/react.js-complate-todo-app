import React, { Component } from "react";
//import SignedOutLinks from "./SignedOutLinks";
import SignedInLinks from "./SignedInLinks";

export class NavBar extends Component {
  render() {
    return (
      <div>
        <SignedInLinks />
      </div>
    );
  }
}

export default NavBar;
