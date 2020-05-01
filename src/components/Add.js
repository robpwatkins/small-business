import React, { Component } from 'react';
import { Input, Button, Container } from '@material-ui/core';

const containerStyle = {
  width: "500px",
  paddingTop: "45px"
}

const buttonStyle = {
  marginTop: "15px",
  width: "225px"
}

class Add extends Component {
  state = {
    name: '',
    address: '', 
    hours: '',
    description: ''
  }

  handleTextChange = (event) => {
    const state = { ...this.state };
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      name: this.state.name,
      address: this.state.address,
      hours: this.state.hours,
      description: this.state.description
    })
    console.log(this.state);
    this.setState({
      name: '',
      address: '', 
      hours: '',
      description: ''
    })
  }

  render() {
    return (
      <Container style={containerStyle}>
        <form action="" onSubmit={this.handleSubmit}>
          <Input 
            placeholder="Name"
            onChange={this.handleTextChange}
            value={this.state.name}
            name="name"
            fullWidth
          />
          <br />
          <Input 
            placeholder="Address"
            onChange={this.handleTextChange}
            value={this.state.address}
            name="address" 
            fullWidth
          />
          <br />
          <Input 
            placeholder="Hours(ex. 8AM - 9PM)"
            onChange={this.handleTextChange}
            value={this.state.hours}
            name="hours" 
            fullWidth
            />
          <br />
          <Input 
            placeholder="Description"
            onChange={this.handleTextChange}
            value={this.state.description}
            name="description" 
            fullWidth
          />
          <br />
          <Button 
            type="submit"
            variant="contained" 
            color="primary"
            style={buttonStyle}
          >
            SAVE
          </Button>
        </form>
      </Container>
    )
  }
}

export default Add;