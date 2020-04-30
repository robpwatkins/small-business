import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Nav = (props) => {

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
          {props.loggedIn &&
            <Link to="/add">
              <li>Add</li>
            </Link>
          }
          {props.loggedIn ? (
            <Link to="/">
              <li onClick={() => {
                document.cookie = "loggedIn=false";
                props.handleLogout();
              }}>Logout</li>
            </Link>
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