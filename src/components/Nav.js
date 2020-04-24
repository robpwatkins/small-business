import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';

const Nav = () => {
  return (
    <AppBar position="static" >
      <Toolbar style={{width: "100%", justifyContent: "space-between",}}>
        <h5>Austin Small Business</h5>
        <ul style={{display: "flex", width:"20%", justifyContent: "space-around", listStyle: "none"}}>
          <li>Listings</li>
          <li>Login</li>
        </ul>
      </Toolbar>
    </AppBar>
  )
}

export default Nav;