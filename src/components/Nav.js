import React from 'react';
import { checkAuth } from '../checkAuth';
import { AppBar, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <AppBar position="static" >
      <Toolbar style={{width: "100%", justifyContent: "space-between",}}>
        <Link to="/">
          <h5>Austin Small Business</h5>
        </Link>
        <ul style={{display: "flex", width:"20%", justifyContent: "space-around", listStyle: "none"}}>
          <Link to="/listings">
            <li>Listings</li>
          </Link>
          {checkAuth() &&
            <Link to="/add">
              <li>Add</li>
            </Link>
          }
          {checkAuth() ? (
            <li onClick={() => {
              document.cookie = "loggedIn=";
              window.location.replace('/login');
            }}
            style={{cursor: "pointer"}}
            >Logout</li>
          ):(
            <Link to="/login">
              <li>Login</li>
            </Link>
            )}
        </ul>
      </Toolbar>
    </AppBar>
  )
}

export default Nav;