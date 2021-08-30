import React from 'react';
import { useSelector } from 'react-redux';

import { getToday } from '../../store/user';

import { Footer, Body } from '../../common/components';
import NavBar from '../../common/containers/NavBar';
import PlantList from '../../common/components/PlantList';
import RouteButton from './../../common/containers/RouteButton';

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
        <p>Have you eaten any more plants?</p>
      </Body>
      <Footer centered>
        <RouteButton route="tracker">Yes, I had more</RouteButton>
        <RouteButton route="result">No, that's all I've eaten</RouteButton>
      </Footer>
    </>
  );
};

export default FollowUpPageContainer;
