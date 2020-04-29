import React from 'react';
import { Switch, Route } from 'react-router';
import Home from './components/Home';
import Listings from './containers/Listings';
import Login from './components/Login';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/listings" component={Listings} />
      <Route path="/login" component={Login} />
    </Switch>
  )
}

export default Router;
