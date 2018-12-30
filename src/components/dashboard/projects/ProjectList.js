import React, { Component } from "react";
import Project from "./Project";
import { Link } from "react-router-dom";

class ProjectList extends Component {
  render() {
    let projects = this.props.projects;
    let projectList =
      projects &&
      projects.map(project => {
        return <Project project={project} key={project.id} />;
      });
    console.log(this.props);
    return (
      <div className="container projects">
        <h3>Projects</h3>
        {projectList}
        <Link to="/newproject" className="btn-large dark">
          New Project
        </Link>
      </div>
    );
  }
}

export default ProjectList;
