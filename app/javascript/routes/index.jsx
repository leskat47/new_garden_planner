import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Areas from '../components/Areas';
import Plants from '../components/plants/Plants';
import Location from '../components/Location';

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Areas} />
      <Route path="/area/:areaId/location/:locationId" component={Location} />
      <Route path="/plants" exact component={Plants} />
    </Switch>
  </Router>
);