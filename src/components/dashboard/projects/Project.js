import React, { Component } from "react";
import projectFilter from "../../../store/actions/projectFilter";
import { connect } from "react-redux";

class Project extends Component {
  handleClick = () => {
    this.props.filterProject(this.props.project.id);
  };
  render() {
    let project = this.props.project;
    return (
      <div className="project">
        <p className="project-title" onClick={this.handleClick}>
          {project.title}
        </p>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    filterProject: id => dispatch(projectFilter(id))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Project);
