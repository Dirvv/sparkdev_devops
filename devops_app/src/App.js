import React from 'react';
import logo from './logo.svg';
import Adrian from './AdrianS';
import './App.css';
import JuanC from './JuanC';
import NatherciaG from './NatherciaG';
import MauricioS from './MauricioS';
import DavidR from './DavidR';
import DavidA from './DavidA';
import William from './William';
import AndreM from './AndreM'
import RandolphA from './RandolphA';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <JuanC />
        <William /> 
        <NatherciaG/> 
        <DavidR />
        <DavidA />
        <MauricioS />
        <AndreM />
        <Adrian></Adrian>
        <RandolphA />
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
