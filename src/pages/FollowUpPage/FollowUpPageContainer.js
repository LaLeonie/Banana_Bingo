import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { getToday } from '../../store/user';

import { Footer, Body } from '../../common/components';
import ExtraScore from './components/ExtraScore';
import NavBar from '../../common/containers/NavBar';
import PlantList from '../../common/components/PlantList';
import RouteButton from './../../common/containers/RouteButton';

const FollowupQuestion = styled.div`
  margin-top: 10vh;
`;

const victoryMessage = (
  <>
    <h2>What a victory!</h2>
    <p>You also get a star for every plant you ate today</p>
  </>
);

const loseMessage = (
  <>
    <h2>Don't worry, tomorrow is another day.</h2>
    <p>You still get a star for every plant you ate today.</p>
  </>
);

const FollowUpPageContainer = () => {
  const { victory, dailyPlants } = useSelector(getToday);

  return (
    <>
      <NavBar gameStatus="true" />
      <Body>
        {victory ? victoryMessage : loseMessage}
        <PlantList plants={dailyPlants} />
        <ExtraScore amount={dailyPlants.length} />
        <FollowupQuestion>Have you eaten any more plants?</FollowupQuestion>
      </Body>
      <Footer centered>
        <RouteButton route="tracker">Yes, I had more</RouteButton>
        <RouteButton route="result">No, that's all I've eaten</RouteButton>
      </Footer>
    </>
  );
};

export default FollowUpPageContainer;
