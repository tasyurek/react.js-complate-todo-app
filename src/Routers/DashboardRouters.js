import React from "react";
import Dashboard from "../components/dashboard/Dashboard";
import { Switch, Route } from "react-router-dom";

function DashboardRouters() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} exact />
    </Switch>
  );
}

export default DashboardRouters;
