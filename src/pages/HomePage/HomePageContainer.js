import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GameTitle, Body, Header } from './../../common/components';
import RouteButton from './../../common/containers/RouteButton';
import { BasicButton, ButtonContainer } from '../../common/components';
import GameSettings from './components/GameSettings';

const HomePageContainer = () => {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <>
      <Header>
        <ButtonContainer>
          <RouteButton route="dashboard">Dashboard</RouteButton>
          <RouteButton route="info">
            <FontAwesomeIcon icon="question" />
          </RouteButton>
        </ButtonContainer>
      </Header>
      <Body>
        {showSettings && <GameSettings setShowSettings={setShowSettings} />}
        <GameTitle>Banana Bingo</GameTitle>
        <ButtonContainer>
          <BasicButton onClick={() => setShowSettings(true)}>
            Settings
          </BasicButton>
          <RouteButton isPrimary="true" route="game">
            Play
          </RouteButton>
        </ButtonContainer>
      </Body>
    </>
  );
};

export default HomePageContainer;
