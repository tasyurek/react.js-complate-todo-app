import React, { Component } from "react";
import HorizontalNavBar from "./HorizontalNavBar";

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="h-navbar black-text">
          <div className="right">
            <HorizontalNavBar />
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
