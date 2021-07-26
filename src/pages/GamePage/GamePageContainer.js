import React from 'react';
import RouteButton from '../../common/containers/RouteButton';
import GameBoard from './components/GameBoard';
import { Body, Footer } from '../../common/components';
import NavBar from '../../common/containers/NavBar';

const GamePageContainer = () => {
  return (
    <>
      <NavBar full />
      <Body>
        <GameBoard />
      </Body>
      <Footer>
        <RouteButton route="followup">I'm Done</RouteButton>
      </Footer>
    </>
  );
};

export default GamePageContainer;
