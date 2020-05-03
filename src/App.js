import React from 'react';
import './App.css';
import Nav from './containers/Nav';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;