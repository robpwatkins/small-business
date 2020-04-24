import React from 'react';
import './App.css';
import Nav from './components/Nav';
import BusinessList from './components/BusinessList';
import BusinessDetails from './components/BusinessDetails';

function App() {
  return (
    <div className="App">
      <Nav />
      <BusinessList />
      <BusinessDetails />
    </div>
  );
}

export default App;
