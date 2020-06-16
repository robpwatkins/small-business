import React, { useState } from 'react';
import { Input, Button, Container } from '@material-ui/core';

const containerStyle = {
  width: "500px",
  paddingTop: "45px"
}

const buttonStyle = {
  marginTop: "15px",
  width: "225px"
}

const Add = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [hours, setHours] = useState('');
  const [description, setDescription] = useState('');

  const handleTextChange = (event) => {
    // [event.target.name] = event.target.value;
    console.log(event.target.name);
  }

  const handleSubmit = (event) => {
    console.log('heyoo');
    event.preventDefault();
    const newBusiness = this.state;
    newBusiness.id = this.props.businesses.length + 1;
    this.props.addBusiness(newBusiness);
    this.props.history.push('/listings');
  }

  return (
    <Container style={containerStyle}>
      <form action="" onSubmit={handleSubmit}>
        <Input 
          placeholder="Name"
          onChange={handleTextChange}
          value={name}
          name="name"
          fullWidth
        />
        <br />
        <Input 
          placeholder="Address"
          onChange={handleTextChange}
          value={address}
          name="address" 
          fullWidth
        />
        <br />
        <Input 
          placeholder="Hours(ex. 8AM - 9PM)"
          onChange={handleTextChange}
          value={hours}
          name="hours" 
          fullWidth
        />
        <br />
        <Input 
          placeholder="Description"
          onChange={handleTextChange}
          value={description}
          name="description" 
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

export default Add;