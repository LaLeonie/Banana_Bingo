import React from 'react';
import { Header, Logo } from '../components';
import { useSelector } from 'react-redux';

import { scoreCalculator } from '../../utils';

import RouteButton from './RouteButton';

const NavBar = () => {
  const playedToday = useSelector((state) => state.game.playedToday);
  const dayScore = useSelector((state) => state.user.today.dayScore);
  let scoreSum = scoreCalculator(dayScore);

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
