import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class SignedOutLinks extends Component {
  render() {
    return (
      <ul>
        <li>
          <NavLink to="/signin">Sign in</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Sign up</NavLink>
        </li>
      </ul>
    );
  }
}

export default SignedOutLinks;
