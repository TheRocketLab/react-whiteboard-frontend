import React from 'react';

import { Wrapper } from './style';

const TeamCard = props =>
  console.log(props) || (
    <Wrapper>
      {props.fullName} ({props.tricode})<div>{props.league}</div>
      <ul>
        <li id="conference">{props.confName || '-'}</li>
        <li id="city">{props.city || '-'}</li>
        <li id="division">{props.divName || '-'}</li>
        <li id="NBA_Franchise">{props.isNBAFranchise ? 'yes' : 'no'}</li>
        <li id="All_Star">{props.isAllStar ? 'yes' : 'no'}</li>
      </ul>
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
