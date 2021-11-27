import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Areas from '../components/Areas';
import Plants from '../components/plants/Plants';

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Areas} />
      <Route path="/plants" exact component={Plants} />
    </Switch>
  </Router>
);