import React from 'react';
import { Header, Logo } from '../components';
import { useSelector } from 'react-redux';

import { scoreCalculator } from '../../utils';
import { getToday } from '../../store/user';

import RouteButton from './RouteButton';
import { ButtonContainer } from '../components';

const NavBar = ({ gameStatus }) => {
  const { initialScore, extraScore } = useSelector(getToday);
  let scoreSum = scoreCalculator({ initialScore, extraScore });

  return (
    <Header full>
      <ButtonContainer>
        <RouteButton route="">Go Home</RouteButton>
        <RouteButton back>Go Back</RouteButton>
      </ButtonContainer>

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
