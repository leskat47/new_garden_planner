import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Areas from '../components/Areas';

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Areas} />
      <Route path="/plants" exact component={Home} />
    </Switch>
  </Router>
);