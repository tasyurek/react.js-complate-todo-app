import React from "react";
import { Switch, Route } from "react-router-dom";
import NewProject from "../components/dashboard/projects/NewProject";

function ProjectRouters() {
  return (
    <Switch>
      <Route path="/createproject" component={NewProject} />
    </Switch>
  );
}

export default ProjectRouters;
