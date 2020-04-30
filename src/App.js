import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Router from './Router';
import cookie from 'cookie';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

class App extends React.Component {
  state = {
    loggedIn: false
  }

  componentDidMount() {
    const cookies = cookie.parse(document.cookie);
    console.log(cookies);
    cookies && this.setState({ loggedIn: true });
  }
  
  handleLogout = () => {
    this.setState({ loggedIn: false });
  }

  render() {
    console.log('App: ', this.state.loggedIn);
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Nav loggedIn={this.state.loggedIn} handleLogout={this.handleLogout} />
          <Router loggedIn={this.state.loggedIn} />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
