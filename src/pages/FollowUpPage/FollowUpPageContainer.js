import React from 'react';
import { useSelector } from 'react-redux';

import RouteButton from './../../common/containers/RouteButton';
import { Footer, Body } from '../../common/components';
import NavBar from '../../common/containers/NavBar';
import PlantList from '../../common/containers/PlantList';
import { getToday } from '../../store/user';

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
  const today = useSelector(getToday);

  return (
    <>
      <NavBar gameStatus="true" />
      <Body>
        {today.victory ? victoryMessage : loseMessage}
        <PlantList />
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
