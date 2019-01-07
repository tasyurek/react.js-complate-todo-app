import React, { Component } from "react";

class Project extends Component {
  render() {
    let project = this.props.project;
    return (
      <div className="project">
        <p className="projectTitle">{project.title}</p>
        <button className="button">Edit</button>
      </div>
    );
  }
}

export default Project;
