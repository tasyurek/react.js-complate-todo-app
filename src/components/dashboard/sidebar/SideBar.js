import React, { Component } from "react";
import ProjectList from "./projects/ProjectList";

export class SideBar extends Component {
  state = { show: false };

  handleClick = () => {
    this.setState(prevState => ({ show: !prevState.show }));
  };
  render() {
    let id, content, icon;

    if (this.state.show) {
      id = "slideIn";
      content = "show";
      icon = "close";
    } else {
      id = "slideOut";
      content = "hide";
      icon = "open";
    }

    return (
      <div className="sidebar" id={id}>
        <div id={content}>
          <h3 className="sidebar-header">Projects</h3>
          <ProjectList />
        </div>
        <i
          id={icon}
          className="fas fa-chevron-left hide-icon"
          onClick={this.handleClick}
        />
        {!this.state.show && <h3 className="hide-sidebar-header">Projects</h3>}
      </div>
    );
  }
}

export default SideBar;
