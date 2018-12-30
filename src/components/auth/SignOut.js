import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignOut extends Component {
  render() {
    return (
      <div className="signout">
        <div className="row">
          <div className="col s12 m6 offset-m3">
            <h2>Built for developers</h2>
            <h5>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit.
            </h5>
            <Link to="/signin" className="btn-large blue">
              Sign in
            </Link>

            <Link to="/signup" className="btn-large green right">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SignOut;
