import React, { Component } from "react";
import SideBar from "./SideBar";
import Content from "./Content";

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
