import React, { Component } from "react";
import SignedInLinks from "./SignedInLinks";

class NavBar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapped navbar right">
          <SignedInLinks />
        </div>
      </nav>
    );
  }
}

export default NavBar;
