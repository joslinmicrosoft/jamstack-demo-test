import React from 'react';
import logo from './logo.svg';
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
          href="/.api/GetList"
        >
          Let's try some functions!
        </a>
        <a 
          className="App-link"
          href="/authenticated/"
        >
        You can only get here if you've logged in!
        </a>

      </header>
    </div>
  );
}

export default Home;
