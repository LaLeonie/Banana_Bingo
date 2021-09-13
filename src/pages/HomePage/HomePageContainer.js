import React, { useState } from 'react';
import styled from 'styled-components';

import { GameTitle, Body, Header } from './../../common/components';
import RouteButton from './../../common/containers/RouteButton';
import { SecondaryButton } from '../../common/components';
import GameSettings from './components/GameSettings';

const ButtonContainer = styled.div`
  display: flex;
  gap: 4px;
`;

const HomePageContainer = () => {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <>
      <Header>
        <RouteButton route="dashboard">Stats</RouteButton>
        <RouteButton route="info">?</RouteButton>
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
