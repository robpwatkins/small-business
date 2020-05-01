import React, { Component } from 'react';
import { Input, Button } from '@material-ui/core';

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
      <form action="" onSubmit={this.handleSubmit}>
        <Input 
          placeholder="Name"
          onChange={this.handleTextChange}
          value={this.state.name}
          name="name"
        />
        <br />
        <Input 
          placeholder="Address"
          onChange={this.handleTextChange}
          value={this.state.address}
          name="address" 
        />
        <br />
        <Input 
          placeholder="Hours(ex. 8AM - 9PM)"
          onChange={this.handleTextChange}
          value={this.state.hours}
          name="hours" 
          />
        <br />
        <Input 
          placeholder="Description"
          onChange={this.handleTextChange}
          value={this.state.description}
          name="description" 
        />
        <br />
        <Button 
          type="submit"
          variant="contained" 
          color="primary"
        >
          SAVE
        </Button>
      </form>
    )
  }
}

export default Add;