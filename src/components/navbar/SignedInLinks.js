import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class SignedInLinks extends Component {
  render() {
    return (
      <ul className="right">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/projectlist">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/signout">Sign out</NavLink>
        </li>
      </ul>
    );
  }
}

export default SignedInLinks;
