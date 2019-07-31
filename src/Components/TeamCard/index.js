import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  color: ${props => props.theme.color.red};
`;

const Logo = styled.img``;
const TeamName = styled.div``;
const TeamCode = styled.span``;
const League = styled.div``;
const TeamDetails = styled.ul``;
const DetailItem = styled.li``;
const DetailLabel = styled.span``;
const DetailValue = styled.span``;

const TeamCard = props =>
  console.log(props) || (
    <Wrapper>
      <Logo
        style={{ width: '100px' }}
        alt={props.fullName}
        src={`https://stats.nba.com/media/img/teams/logos/${props.tricode}_logo.svg`}
      />
      <TeamName>
        {props.fullName}
        <TeamCode>({props.tricode})</TeamCode>
      </TeamName>
      <League>{props.league}</League>
      <TeamDetails>
        <DetailItem id="conference">
          <DetailLabel>Conference</DetailLabel>
          <DetailValue>{props.confName || '-'}</DetailValue>
        </DetailItem>
        <DetailItem id="city">
          <DetailLabel>City</DetailLabel>
          <DetailValue>{props.city || '-'}</DetailValue>
        </DetailItem>
        <DetailItem id="division">
          <DetailLabel>Div</DetailLabel>
          <DetailValue>{props.divName || '-'}</DetailValue>
        </DetailItem>
        <DetailItem id="NBA_Franchise">
          <DetailLabel>NBA Franchise</DetailLabel>
          <DetailValue>{props.isNBAFranchise ? 'yes' : 'no'}</DetailValue>
        </DetailItem>
        <DetailItem id="All_Star">
          <DetailLabel>All Star</DetailLabel>
          <DetailValue>{props.isAllStar ? 'yes' : 'no'}</DetailValue>
        </DetailItem>
      </TeamDetails>
    </Wrapper>
  );

export default TeamCard;
