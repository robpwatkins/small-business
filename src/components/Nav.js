import React from 'react';
import { checkAuth } from '../checkAuth';
import { AppBar, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';

const toolbarStyle = {
  width: "100%", 
  justifyContent: "space-between"
}

const ulStyle = {
  display: "flex", 
  width:"20%", 
  justifyContent: "space-around", 
  listStyle: "none"
}

const linkStyle = {
  textDecoration: "none",
  color: "inherit"
}

const logoutStyle = {
  cursor: "pointer"
}

const userBarStyle = {
  width: "100%", 
  height: "21px",
  paddingLeft: "25px",
  lineHeight: "21px",
  fontSize: "13px",
  color: "grey",
  background: "lightgrey"
}

const Nav = (props) => {
  return (
    <React.Fragment>
      <AppBar position="static" >
        <Toolbar style={toolbarStyle}>
          <Link to="/" style={linkStyle}>
            <h5>Austin Small Business</h5>
          </Link>
          <ul style={ulStyle}>
            <Link to="/listings" style={linkStyle}>
              <li>Listings</li>
            </Link>
            {checkAuth() &&
              <Link to="/add" style={linkStyle}>
                <li>Add</li>
              </Link>
            }
            {checkAuth() ? (
              <li 
                onClick={() => {
                  document.cookie = "loggedIn=";
                  window.location.replace('/');
                }}
                style={logoutStyle}
                >Logout
              </li>
            ):(
              <Link to="/login" style={linkStyle}>
                <li>Login</li>
              </Link>
              )}
          </ul>
        </Toolbar>
      </AppBar>
      {checkAuth() &&
        <div style={userBarStyle}>Logged in as: {props.user}</div>
      }
    </React.Fragment>
  )
}

export default Nav;