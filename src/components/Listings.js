import React from 'react';

const Listings = (props) => {
  return (
    <div>
      {props.loggedIn &&
        <h1>Heyoo</h1>
      }
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