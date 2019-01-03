import React, { Component } from "react";

class Project extends Component {
  render() {
    let project = this.props.project;
    return (
      <div className="project">
        <span>{project.title}</span>
        <span className="btn yellw">Edit</span>
      </div>
    );
  }
}

export default Project;
