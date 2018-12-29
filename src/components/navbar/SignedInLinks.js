import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

class SignedInLinks extends Component {
  render() {
    return (
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>{" "}
        </li>
        <li>
          <Link to="/signout">Sign out</Link>
        </li>
      </ul>
    );
  }
}

export default SignedInLinks;
