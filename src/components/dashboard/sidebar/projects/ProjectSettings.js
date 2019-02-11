import React, { Component } from "react";

export class ProjectSettings extends Component {
  render() {
    return (
      <div id="projectSettings">
        <div className="input-field">
          <button className="button light">Change Title</button>
        </div>
        <div className="input-field">
          <button className="button light">Delete Project</button>
        </div>
      </div>
    );
  }
}

export default ProjectSettings;
