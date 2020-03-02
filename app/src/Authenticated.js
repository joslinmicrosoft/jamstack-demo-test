import React from 'react';
import logo from './logo.svg';
import './Home.css';

function Authenticated() {
  return (
    <div className="Authenticated">
      <header className="Authenticated-header">
        <img src={logo} className="Authenticated-logo" alt="logo" />
        <p>
          Thank you for logging in!
        </p>
      </header>
    </div>
  );
}

export default Authenticated;
