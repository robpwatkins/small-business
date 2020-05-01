import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import cookie from 'cookie';
import Home from './components/Home';
import Listings from './containers/Listings';
import Login from './components/Login';
import Details from './containers/Details';
import Add from './components/Add';

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies["loggedIn"] ? true : false;
}

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
    {...rest}
    render={(props) => checkAuth()
      ? <Component {...props} />
      : <Redirect to="/login" />}
     />
  )
}

const Router = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/listings" component={Listings} />
      <Route path="/login" component={Login} />
      <Route path="/details/:id" component={Details} />
      <ProtectedRoute path="/add" component={Add} /> 
    </Switch>
  )
}

export default Router;
