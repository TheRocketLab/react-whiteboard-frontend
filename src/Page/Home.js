import React, { Component } from 'react';
import logo from './logo.svg';

import CharacterCard from 'Components/CharacterCard';

class Home extends Component {
  state = {
    peoples: [],
  };

  componentDidMount() {
    fetch('https://swapi.co/api/people')
      .then(response => response.json())
      .then(json => this.setState({ peoples: json.results }));
  }

  render() {
    const { peoples } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Whiteboard</h1>
        </header>
        <div className="App-intro">
          {peoples.map(character => (
            <CharacterCard key={character.name} name={character.name} />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
