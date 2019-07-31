import React from 'react';
import logo from './logo.svg';

import GlobalStyle from '../styles/global';
import LeagueSection from '../Components/LeagueSection';

const Home = () => {
  const [leagues, setLeagues] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3004/league')
      .then(response => response.json())
      .then(json => setLeagues(json));
  }, []);

  return (
    <>
      <GlobalStyle />
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
    </>
  );
};

export default Home;
