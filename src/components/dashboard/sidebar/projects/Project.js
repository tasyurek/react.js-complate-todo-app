import React, { Component } from "react";
import projectFilter from "../../../../store/actions/projectFilter";
import { connect } from "react-redux";

class Project extends Component {
  handleClick = () => {
    this.props.filterProject(this.props.project.id);
  };
  render() {
    let project = this.props.project;
    return (
      <div className="project" onClick={this.handleClick}>
        <p className="project-title">{project.title}</p>
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
