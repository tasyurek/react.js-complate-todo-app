import React, { Component } from "react";
import NavBar from "./components/navbar/NavBar";
import { BrowserRouter, Route } from "react-router-dom";
import SignedInLinks from "./components/navbar/SignedInLinks";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <switch>
            <Route path="/home" Component={SignedInLinks} />
          </switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
