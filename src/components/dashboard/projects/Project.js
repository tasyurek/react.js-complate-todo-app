import React, { Component } from "react";

class Project extends Component {
  render() {
    let project = this.props.project;
    return (
      <div className="card project">
        <div className="card-content">
          <span className="card-title">{project.title}</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim.
          </p>
        </div>
        <div className="card-action">
          <div className="btn yellw">Edit</div>
        </div>
      </div>
    );
  }
}

export default Project;
