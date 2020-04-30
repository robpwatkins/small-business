import React from 'react';
import cookie from 'cookie';

class Listings extends React.Component {
  state = {
    loggedIn: false
  }

  componentDidMount() {
    const cookies = cookie.parse(document.cookie);
    console.log('App: ', cookies['loggedIn']);
    cookies['loggedIn'] 
    ? this.setState({ loggedIn: true })
    : this.setState({ loggedIn: false })
  }

  render() {
    return (
      <div>
        {this.props.businesses.map((business, index) => {
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
}

export default Listings;