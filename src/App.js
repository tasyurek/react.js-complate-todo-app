import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import SignOut from "./components/auth/SignOut";
import NavBar from "./components/navbar/NavBar";
import ProjectList from "./components/dashboard/projects/ProjectList";
import NewProject from "./components/dashboard/projects/NewProject";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" component={Dashboard} exact />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signout" component={SignOut} />
            <Route path="/projectlist" component={ProjectList} />
            <Route path="/newproject" component={NewProject} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
