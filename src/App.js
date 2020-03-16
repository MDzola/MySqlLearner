import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import logo from './assets/APEXLOGO.png';
import './App.css';

import Header from './components/header/header.component'

class App extends React.Component {

  render(){
  return (
      <div>
        <Header />
        <div className="App">
          <header className="App-header">
            <h1>SQL Learner</h1>
            <p>
             Welcome to SQL Learner, a website to provide quick SQL references and a step by step guide to learn and sharpen your SQL skills!
            </p>
            <img src={logo} className="App-logo" alt="logo" />
            <a
              className="App-link"
              href="https://apex.oracle.com/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to Apex Oracle
            </a>
          </header>
        </div>
      </div>
    );
  }
}

export default App;
