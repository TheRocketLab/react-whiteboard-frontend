import React from 'react';
import styled from 'styled-components';

import TeamCard from '../TeamCard';

const Wrapper = styled.div``;
const LeagueTitle = styled.div``;
const Teams = styled.div``;

const LeagueSection = ({ name, teams }) => (
  <Wrapper>
    <LeagueTitle style={{ fontWeight: 'bold' }}>
      LEAGUE {name.toUpperCase()}
    </LeagueTitle>
    <Teams>
      {teams.map(team => (
        <TeamCard key={team.tricode} {...team} league={name} />
      ))}
    </Teams>
  </Wrapper>
);

export default LeagueSection;
