import React from 'react';

import { Wrapper } from './style';

const TeamCard = props => (
  <Wrapper>
    {props.fullName}
    <img
      style={{ width: '100px' }}
      alt={props.fullName}
      src={`https://stats.nba.com/media/img/teams/logos/${
        props.tricode
      }_logo.svg`}
    />
  </Wrapper>
);

export default TeamCard;
