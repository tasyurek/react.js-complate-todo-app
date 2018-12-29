import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class VerticalNavBar extends Component {
  render() {
    return (
      <div className="row v-navbar">
        <div className="col s12 m2">
          <ul>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default VerticalNavBar;
