import React from 'react';

const Listings = (props) => {
  console.log('Listings: ', props.isLoggedIn);
  return (
    <div>
      {props.businesses.map((business, index) => {
        return (
          <div key={index}>
            <h1>{business.Name}</h1>
            <h3>{business.Description}</h3>
            <h5>{business.Address}</h5>
            <h5>{business.Hours}</h5>
          </div>
        )
      })}
    </div>
  )
}

export default Listings;