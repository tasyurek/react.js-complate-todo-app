import React, { Component } from "react";
import ProjectList from "./projects/ProjectList";
import CardList from "./todos/CardList";

class Dashboard extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s12 m3 projects">
          <ProjectList />
        </div>
        <div className="col s12 m9 cards">
          <h3>Cards</h3>
          <CardList />
        </div>
      </div>
    );
  }
}

export default Dashboard;
