import React, { Component } from 'react';
import { Input, Button } from '@material-ui/core';

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  handleTextChange = (event) => {
    const state = { ...this.state };
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    document.cookie = "loggedIn=true";
    window.location.replace("/listings");
  }

  render() {
    return (
      <div style={{width: "100%", textAlign: "center", paddingTop: "45px"}}>
        <form action="" onSubmit={this.handleSubmit}>
          <Input
            required
            placeholder="username"
            onChange={this.handleTextChange}
            value={this.state.username}
            name="username"
            >
          </Input>
          <br />
          <Input
            required
            placeholder="password"
            onChange={this.handleTextChange}
            value={this.state.password}
            name="password"
            type="password"
            >
          </Input>
          <br />
          <Button 
            type="submit"
            variant="contained"
            style={{marginTop: "15px"}}
            >
              login
          </Button>
        </form>
      </div>
    )
  }
}

export default Login;