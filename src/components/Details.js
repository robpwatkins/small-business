import React from 'react';
import { Container } from '@material-ui/core';

const containerStyle = {
  display: "flex",
  width: "100%",
  height: "200px",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "25px",
}

const divStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "50%",
  justifyContent: "space-between"
}

const Details = (props) => {
  const id = Number(props.match.params.id);
  const business = props.businesses.find(business => business.id === id);

  return (
    <Container style={containerStyle}>
      <div style={divStyle}>
        <h1>{business.name}</h1>
        <h4>{business.address}</h4>
        <h4>{business.hours}</h4>
        <p>{business.description}</p>
      </div>
    </Container>
  )
}

export default Details;