import React from "react";
import { Switch, Route } from "react-router-dom";
import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp";
import SignOut from "../components/auth/SignOut";

function AuthRouters() {
  return (
    <Switch>
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signout" component={SignOut} />
    </Switch>
  );
}

export default AuthRouters;
