import React from 'react';
import logo from './logo.svg';
import './App.css';

function Authenticated() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Welcome to your gated content demo. <br/>
          Thank you for logging in!
        </h1>
      </header>
    </div>
  );
}

export default Authenticated;
