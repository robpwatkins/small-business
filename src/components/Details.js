import React from 'react';
import { Container } from '@material-ui/core';

const containerStyle = {
  display: "flex",
  width: "100%",
  height: "20vh",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "25px",
}

const divStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  justifyContent: "space-between"
}

const Details = (props) => {
  const id = Number(props.match.params.id);
  const business = props.businesses.find(business => business.id === id);

  return (
    <Container style={containerStyle}>
      <div style={divStyle}>
        <h1>{business.Name}</h1>
        <h4>{business.Address}</h4>
        <h4>{business.Hours}</h4>
        <p>{business.Description}</p>
      </div>
    </Container>
  )
}

export default Details;