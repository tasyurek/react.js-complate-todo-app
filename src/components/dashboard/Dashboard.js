import React, { Component } from "react";
import ProjectList from "./projects/ProjectList";
import CardList from "./todos/CardList";
import CreateCard from "./todos/CreateCard";

class Dashboard extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s12 m3 projects">
          <ProjectList />
        </div>
        <div className="col s12 m8 offset-m1 cards">
          <h3>Cards</h3>
          <CardList />
          <CreateCard />
        </div>
      </div>
    );
  }
}

export default Dashboard;
