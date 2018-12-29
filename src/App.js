import React, { Component } from "react";
import NavBar from "./components/navbar/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import SignIn from "./components/auth/SignIn";
import SignOut from "./components/auth/SignOut";
import VerticalNavBar from "./components/navbar/VerticalNavBar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <VerticalNavBar />
          <Switch>
            <Route path="/" component={Dashboard} exact />
            <Route path="/signin" component={SignIn} />
            <Route path="/signout" component={SignOut} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
