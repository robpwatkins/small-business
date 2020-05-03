import React from 'react';
import { Container } from '@material-ui/core';

const containerStyle = {
  display: "flex",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "25px",
}

const divStyle = {
  display: "flex",
  flexDirection: "column",
  width: "50%",
}

const imgStyle = {
  width: "300px",
  margin: "0 auto",
  marginBottom: "15px"
}

const pStyle = {
  marginTop: "10px"
}

const Details = (props) => {
  const id = Number(props.match.params.id);
  const business = props.businesses.find(business => business.id === id);

  return (
    <Container style={containerStyle}>
      <div style={divStyle}>
        <img src={business.img} alt="" style={imgStyle}/>
        <div>
          <h1>{business.name}</h1>
          <h4>{business.address}</h4>
          <h4>{business.hours}</h4>
        </div>
        <p style={pStyle}>{business.description}</p>
      </div>
    </Container>
  )
}

export default Details;