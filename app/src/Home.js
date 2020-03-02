import React from 'react';
import logo from './logo.png';
import './App.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to our Static App site!
        </p>
        <a
          className="App-link"
          href="/recipes/"
        >
          Let's try some functions!
        </a>
        <a 
          className="App-link"
          href="/authenticated/"
        >
        You can only get here if you've logged in!
        </a>
		        <a 
          className="App-link"
          href="/.auth/login/aad"
        >
        Log in with AAD
        </a>

      </header>
    </div>
  );
}

export default Home;
