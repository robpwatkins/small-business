import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

class App extends React.Component {
  state = {
    isLoggedIn: false
  }

  handleLogin = () => {
    this.setState({ isLoggedIn: true })
  }

  render() {
    console.log('App: ', this.state.isLoggedIn);
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Nav isLoggedIn={this.isLoggedIn} />
          <Router handleLogin={this.handleLogin} isLoggedIn={this.state.isLoggedIn} />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
