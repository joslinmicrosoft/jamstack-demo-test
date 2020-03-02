import React from 'react';
import logo from './logo.svg';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <p>
          Welcome to our Static App site!
        </p>
        <a
          className="Home-link"
          href="/.api/GetList"
        >
          Let's try some functions!
        </a>
        <a 
          className="Home-link"
          href="/authenticated/"
        >
        You can only get here if you've logged in!
        </a>

      </header>
    </div>
  );
}

export default Home;
