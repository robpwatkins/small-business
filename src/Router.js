import React from 'react';
import { Switch, Route } from 'react-router';
import Home from './components/Home';
import Listings from './containers/Listings';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/listings" component={Listings} />
    </Switch>
  )
}

export default Router;
