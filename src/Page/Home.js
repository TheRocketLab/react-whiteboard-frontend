import React, { Component } from 'react';
import logo from './logo.svg';

import LeagueSection from 'Components/LeagueSection';

class Home extends Component {
  state = {
    leagues: [],
  };

  componentDidMount() {
    fetch('http://localhost:3004/league')
      .then(response => response.json())
      .then(json => this.setState({ leagues: json }));
  }

  render() {
    const { leagues } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Whiteboard</h1>
        </header>
        <div className="App-intro">
          {Object.keys(leagues).map(league => (
            <LeagueSection key={league} name={league} teams={leagues[league]} />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
