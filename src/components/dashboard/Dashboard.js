import React, { Component } from "react";
import SideBar from "./sidebar/SideBar";
import Content from "./content/Content";

class Dashboard extends Component {
  render() {
    return (
      <div id="dashboard">
        <SideBar />
        <Content />
      </div>
    );
  }
}

export default Dashboard;
