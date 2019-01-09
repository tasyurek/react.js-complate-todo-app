import React, { Component } from "react";
import Project from "./Project";
import { connect } from "react-redux";

class ProjectList extends Component {
  render() {
    let projects = this.props.projects;
    let projectList =
      projects &&
      projects.map(project => {
        return <Project project={project} key={project.id} />;
      });
    return (
      <div className="project-list">
        <h3>Projects</h3>
        {projectList}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projectReducer
});

export default connect(
  mapStateToProps,
  null
)(ProjectList);
