import React, { Component } from "react";
import ProjectList from "./projects/ProjectList";
import CardList from "./cards/CardList";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <ProjectList />
        <div className="cards">
          <CardList />
        </div>
      </div>
    );
  }
}

export default Dashboard;
