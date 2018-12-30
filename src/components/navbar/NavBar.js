import React, { Component } from "react";
import SignedOutLinks from "./SignedOutLinks";
import SignedInLinks from "./SignedInLinks";

export class NavBar extends Component {
  render() {
    return (
      <nav className="navbar z-depth-1">
        <div className="container">
          <a href="/" className="brand-logo center hide-on-med-and-down">
            TODO
          </a>
          <SignedInLinks />
        </div>
      </nav>
    );
  }
}

export default NavBar;
