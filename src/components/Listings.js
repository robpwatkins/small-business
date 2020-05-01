import React from 'react';
import { checkAuth } from '../checkAuth';
import { Link } from 'react-router-dom';


const Listings = (props) => {
  return (
    <div>
      {props.businesses.map((business, index) => {
        return (
          <div key={index}>
            <Link to={`/details/${business.id}`}>
              <h1>{business.Name}</h1>
            </Link>
            <h3>{business.Description}</h3>
            <h5>{business.Address}</h5>
            <h5>{business.Hours}</h5>
            {checkAuth() &&
            <button>DELETE</button>
            }
          </div>
        )
      })}
    </div>
  )
}

export default Listings;