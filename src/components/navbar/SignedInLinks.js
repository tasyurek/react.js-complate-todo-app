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
          <NavLink to="/createproject">Create Project</NavLink>
        </li>
        <li>
          <NavLink to="/signout">Sign out</NavLink>
        </li>
      </ul>
    );
  }
}

export default SignedInLinks;
