import React from 'react';
import logo from './logo.svg';
import './App.css';
import DavidR from './DavidR';

import MauricioS from './MauricioS';
import DavidA from './DavidA';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MauricioS />
        <DavidA />
        <DavidR />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
