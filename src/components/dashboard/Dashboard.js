import React, { Component } from "react";
import SideBar from "./SideBar";
import Content from "./Content";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        {/* map all project for content, pass project with sidebar and content
          if 
        */}
        <SideBar />
        <Content />
      </div>
    );
  }
}

export default Dashboard;
