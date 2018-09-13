import React from 'react';

import TeamCard from 'Components/TeamCard';

const LeagueSection = ({ name, teams }) => (
  <div>
    <span style={{ fontWeight: 'bold' }}>LEAGUE {name.toUpperCase()}</span>
    {teams.map(team => (
      <TeamCard key={team.tricode} {...team} league={name} />
    ))}
  </div>
);

export default LeagueSection;
