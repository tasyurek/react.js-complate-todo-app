import React, { Component } from "react";

export class ProjectSettings extends Component {
  state = { openSettings: false };

  handleClick = () => {
    this.setState(state => ({ openSettings: !state.openSettings }));
  };
  render() {
    const projectSettings = this.state.openSettings ? (
      <div>Settings</div>
    ) : (
      <div className="right" onClick={this.handleClick}>
        <i className="fas fa-cog" />
      </div>
    );

    return <div className="right">{projectSettings}</div>;
  }
}

export default ProjectSettings;
