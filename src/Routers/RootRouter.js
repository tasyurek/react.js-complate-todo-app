import React from "react";
import AuthRouters from "./AuthRouters";
import ProjectRouters from "./ProjectRouters";
import DashboardRouters from "./DashboardRouters";

function RootRouter() {
  return (
    <div>
      <DashboardRouters />
      <AuthRouters />
      <ProjectRouters />
    </div>
  );
}

export default RootRouter;
