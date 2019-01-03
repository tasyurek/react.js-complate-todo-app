import React from "react";
import { Switch, Route } from "react-router-dom";
import ProjectList from "../components/dashboard/projects/ProjectList";
import NewProject from "../components/dashboard/projects/NewProject";

function ProjectRouters() {
  return (
    <Switch>
      <Route path="/projectlist" component={ProjectList} />
      <Route path="/newproject" component={NewProject} />
    </Switch>
  );
}

export default ProjectRouters;
