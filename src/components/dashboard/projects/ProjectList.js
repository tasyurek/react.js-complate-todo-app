import React, { Component } from "react";
import Project from "./Project";
import { Link } from "react-router-dom";
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

const mapStateToProps = state => ({
  projects: state.projectReducer
});

const connectProjectList = connect(
  mapStateToProps,
  null
)(ProjectList);

export default connectProjectList;
