import React from 'react';
import logo from './logo.svg';
import './App.css';

function Authenticated() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Thank you for logging in!
        </p>
      </header>
    </div>
  );
}

export default Authenticated;
