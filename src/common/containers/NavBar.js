import React from 'react';
import { Header, Logo } from '../components';
import { useSelector } from 'react-redux';

import RouteButton from './RouteButton';

const NavBar = ({}) => {
  const playedToday = useSelector((state) => state.gameData.playedToday);
  const dayScore = useSelector((state) => state.userData.today.dayScore);
  let scoreSum = 0;
  for (let key in dayScore) {
    scoreSum += dayScore[key];
  }

  return (
    <Header full>
      <div>
        <RouteButton route="">Go Home</RouteButton>
        <RouteButton back>Go Back</RouteButton>
      </div>

      <Logo />
      {playedToday ? (
        <div>score: {scoreSum}</div>
      ) : (
        <RouteButton route="info">How to Play</RouteButton>
      )}
    </Header>
  );
};

export default NavBar;
