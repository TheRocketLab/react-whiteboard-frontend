import React, { Component } from 'react';
import logo from './logo.svg';

import TeamCard from 'Components/TeamCard';

class Home extends Component {
  state = {
    teams: [],
  };

  componentDidMount() {
    fetch('http://localhost:3004/league')
      .then(response => response.json())
      .then(json => this.setState({ teams: json.standard }));
  }

  render() {
    const { teams } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Whiteboard</h1>
        </header>
        <div className="App-intro">
          {teams.map(team => (
            <TeamCard key={team.tricode} {...team} />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
