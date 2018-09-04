import React from 'react';

import TeamCard from 'Components/TeamCard';

const LeagueSection = ({ name, teams }) => (
  <div>
    <span>{name.toUpperCase()}</span>
    {teams.map(team => (
      <TeamCard key={team.tricode} {...team} />
    ))}
  </div>
);

export default LeagueSection;
