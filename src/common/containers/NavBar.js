import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        <RouteButton isIcon route="">
          <FontAwesomeIcon icon="home" />
        </RouteButton>
        <RouteButton isIcon back>
          <FontAwesomeIcon icon="arrow-left" />
        </RouteButton>
      </ButtonContainer>

      <Logo />
      {gameStatus ? (
        <div>score: {scoreSum}</div>
      ) : (
        <RouteButton isIcon route="info">
          <FontAwesomeIcon icon="question" />
        </RouteButton>
      )}
    </Header>
  );
};

export default NavBar;
