import React, { Component } from "react";

export class NewProject extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12 m6 offset-m3 l4 offset-l4">
            <h3>Create Project</h3>
            <form>
              <label htmlFor="projectName">
                Project name
                <input type="text" id="projectName" />
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

export default NewProject;
