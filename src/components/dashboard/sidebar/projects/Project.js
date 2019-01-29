import React, { Component } from "react";
import projectFilter from "../../../../store/actions/projectFilter";
import { connect } from "react-redux";
import ProjectSettings from "./ProjectSettings";

class Project extends Component {
  state = { hover: false, openSettings: false };

  handleClick = () => {
    this.props.filterProject(this.props.project.id);
  };

  mouseEnter = () => {
    this.setState({ hover: true });
  };

  mouseLeave = () => {
    this.setState({ hover: false });
  };

  handleSettings = () => {
    this.setState(state => ({ openSettings: !state.openSettings }));
  };

  render() {
    let project = this.props.project;

    const projectSettings = this.state.openSettings ? (
      <div id="projectSettings">
        <div className="input-field">
          <div>Change Title</div>
        </div>
        <div className="input-field">
          <button className="button">Delete</button>
        </div>
      </div>
    ) : null;

    return (
      <div
        className="project"
        onClick={this.handleClick}
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
      >
        <div className="project-header">
          <p className="project-title">{project.title}</p>
          {this.state.hover && (
            <i className="fas fa-cog" onClick={this.handleSettings} />
          )}
        </div>
        <div className="project-body">
          {this.state.openSettings && projectSettings}
        </div>
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
