import React from 'react';

const Details = (props) => {
  const id = Number(props.match.params.id);
  const business = props.businesses.find(business => business.id === id);

  return (
    <div>
      <h1>{business.Name}</h1>
      <h4>{business.Address}</h4>
      <h4>{business.Hours}</h4>
      <h6>{business.Description}</h6>
    </div>
  )
}

export default Details;