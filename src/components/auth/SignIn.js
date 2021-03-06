import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignIn extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12 m6 offset-m3 l4 offset-l4">
            <h3>Sign in</h3>
            <form>
              <label htmlFor="email">
                Email
                <input type="email" id="email" />
              </label>
              <label htmlFor="password">
                Password
                <input type="password" id="password" />
              </label>
              <Link to="/home" className="btn">
                Submit
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
