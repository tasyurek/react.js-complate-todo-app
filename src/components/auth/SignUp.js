import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignUp extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12 m6 offset-m3 l4 offset-l4">
            <h3>Sign Up</h3>
            <form>
              <label htmlFor="firstName">
                First name
                <input type="text" id="firstName" />
              </label>
              <label htmlFor="lastName">
                Last name
                <input type="text" id="lastName" />
              </label>
              <label htmlFor="email">
                Email
                <input type="email" id="email" />
              </label>
              <label htmlFor="password">
                Password
                <input type="password" id="password" />
              </label>
              <div className="btn">Submit</div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
