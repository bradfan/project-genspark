import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../pages/Header";
import Login from "../general/Login";
import Welcome from "../general/Welcome";
import Footer from "../pages/Footer";

class RouterComponent extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
              
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/">
              <Welcome name="Everett" />
            </Route>
        
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default RouterComponent;
