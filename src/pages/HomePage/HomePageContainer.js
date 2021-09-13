import React, { useState } from 'react';

import { GameTitle, Body, Header } from './../../common/components';
import RouteButton from './../../common/containers/RouteButton';
import { SecondaryButton, ButtonContainer } from '../../common/components';
import GameSettings from './components/GameSettings';

const HomePageContainer = () => {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <>
      <Header>
        <ButtonContainer>
          <RouteButton route="dashboard">Stats</RouteButton>
          <RouteButton route="info">?</RouteButton>
        </ButtonContainer>
      </Header>
      <Body>
        {showSettings && <GameSettings setShowSettings={setShowSettings} />}
        <GameTitle>Banana Bingo</GameTitle>
        <ButtonContainer>
          <SecondaryButton onClick={() => setShowSettings(true)}>
            Settings
          </SecondaryButton>
          <RouteButton route="game">Play</RouteButton>
        </ButtonContainer>
      </Body>
    </>
  );
};

export default HomePageContainer;
