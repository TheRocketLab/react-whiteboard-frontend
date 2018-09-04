import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import People from 'Components/People'

class App extends Component {
  render() {
    let data = null
    fetch('https://swapi.co/api/people')
      .then(response => data = response.results)

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Whiteboard</h1>
        </header>
        <p className="App-intro">
          {data.foreEach(person => (
            <People name={person.name} />
          ))}
        </p>
      </div>
    );
  }
}

export default App;
