import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class SignedInLinks extends Component {
  state = { hide: false };

  handleClick = () => {
    this.setState(prevState => ({ hide: !prevState.hide }));
  };

  render() {
    let className = "navbar";

    this.state.hide ? (className += " responsive") : (className = "navbar");

    return (
      <div className={className}>
        <NavLink to="/" className="navitem brand-logo">
          TODO
        </NavLink>
        <NavLink to="/signout" className="navitem">
          Sign out
        </NavLink>
        <NavLink to="/createproject" className="navitem">
          Create Project
        </NavLink>
        <NavLink to="/" className="navitem">
          Home
        </NavLink>
        <div className="icon" onClick={this.handleClick}>
          <i className="fa fa-bars" />
        </div>
      </div>
    );
  }
}

export default SignedInLinks;
