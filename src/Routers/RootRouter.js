import React from "react";
import AuthRouters from "./AuthRouters";
import DashboardRouters from "./DashboardRouters";

function RootRouter() {
  return (
    <div>
      <DashboardRouters />
      <AuthRouters />
    </div>
  );
}

export default RootRouter;
