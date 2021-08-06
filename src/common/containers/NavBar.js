import React from 'react';
import { Header, Logo } from '../components';
import { useSelector } from 'react-redux';

import { scoreCalculator } from '../../utils';
import { getToday } from '../../store/user';

import RouteButton from './RouteButton';

const NavBar = ({ gameStatus }) => {
  const today = useSelector(getToday);
  let scoreSum = scoreCalculator(today.dayScore);

  return (
    <Header full>
      <div>
        <RouteButton route="">Go Home</RouteButton>
        <RouteButton back>Go Back</RouteButton>
      </div>

      <Logo />
      {gameStatus ? (
        <div>score: {scoreSum}</div>
      ) : (
        <RouteButton route="info">How to Play</RouteButton>
      )}
    </Header>
  );
};

export default NavBar;
