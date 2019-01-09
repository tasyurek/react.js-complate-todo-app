import React, { Component } from "react";

class Project extends Component {
  render() {
    let project = this.props.project;
    return (
      <div className="project">
        <p className="project-title">{project.title}</p>
      </div>
    );
  }
}

export default Project;
