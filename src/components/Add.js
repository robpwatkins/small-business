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
    Name: '',
    Address: '', 
    Hours: '',
    Description: ''
  }

  handleTextChange = (event) => {
    const state = { ...this.state };
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      Name: this.state.Name,
      Address: this.state.Address,
      Hours: this.state.Hours,
      Description: this.state.Description
    })
    const newBusiness = this.state;
    this.props.addBusiness(newBusiness);
    this.props.history.push('/listings');
    this.setState({
      Name: '',
      Address: '', 
      Hours: '',
      Description: ''
    })
  }

  render() {
    return (
      <Container style={containerStyle}>
        <form action="" onSubmit={this.handleSubmit}>
          <Input 
            placeholder="Name"
            onChange={this.handleTextChange}
            value={this.state.Name}
            name="Name"
            fullWidth
          />
          <br />
          <Input 
            placeholder="Address"
            onChange={this.handleTextChange}
            value={this.state.Address}
            name="Address" 
            fullWidth
          />
          <br />
          <Input 
            placeholder="Hours(ex. 8AM - 9PM)"
            onChange={this.handleTextChange}
            value={this.state.Hours}
            name="Hours" 
            fullWidth
          />
          <br />
          <Input 
            placeholder="Description"
            onChange={this.handleTextChange}
            value={this.state.Description}
            name="Description" 
            fullWidth
          />
          <br />
          <Button 
            type="submit"
            variant="contained" 
            color="primary"
            style={buttonStyle}
            >SAVE
          </Button>
        </form>
      </Container>
    )
  }
}

export default Add;