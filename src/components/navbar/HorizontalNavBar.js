import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

class HorizontalNavBar extends Component {
  render() {
    return (
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/signout">Sign out</NavLink>
        </li>
        <li>
          <NavLink to="/signin">Sign in</NavLink>
        </li>
      </ul>
    );
  }
}

export default HorizontalNavBar;
