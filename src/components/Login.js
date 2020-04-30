import React from 'react';
import { Input, Button } from '@material-ui/core';

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleTextChange = (event) => {
    const state = { ...this.state };
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  login = (event) => {
    event.preventDefault();
    document.cookie = "loggedIn=true;max-age=60*1000*5";
    window.location.replace("/listings");
  }

  render() {
    return (
      <div style={{width: "100%", textAlign: "center", paddingTop: "45px"}}>
        <form action="" onSubmit={(event) => this.login(event)}>
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
            placeholder="email"
            onChange={this.handleTextChange}
            value={this.state.password}
            name="password"
            type="password"
            >
          </Input>
          <br />
          <Button 
            variant="contained"
            type="submit"
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