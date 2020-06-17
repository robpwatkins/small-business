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
  const [formData, setFormData] = useState([
    { 
      name: '', 
      address: '', 
      hours: '', 
      description: '' 
    }
  ]);

  const handleTextChange = (event) => {
    let _tempFormData = [...formData];
    _tempFormData[event.target.name] = event.target.value;
    setFormData(_tempFormData);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBusiness = this.state;
    newBusiness.id = this.props.businesses.length + 1;
    this.props.addBusiness(newBusiness);
    this.props.history.push('/listings');
  }
  console.log(formData);
  return (
    <Container style={containerStyle}>
      <form action="" onSubmit={handleSubmit}>
        <Input 
          placeholder="Name"
          onChange={handleTextChange}
          value={formData.name || ''}
          name="name"
          fullWidth
        />
        <br />
        <Input 
          placeholder="Address"
          onChange={handleTextChange}
          value={formData.address || ''}
          name="address" 
          fullWidth
        />
        <br />
        <Input 
          placeholder="Hours(ex. 8AM - 9PM)"
          onChange={handleTextChange}
          value={formData.hours || ''}
          name="hours" 
          fullWidth
        />
        <br />
        <Input 
          placeholder="Description"
          onChange={handleTextChange}
          value={formData.description || ''}
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