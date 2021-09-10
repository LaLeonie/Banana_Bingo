import React from 'react';
import styled from 'styled-components';

import CloseButton from 'react-bootstrap/CloseButton';

const SettingsContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  min-height: 40vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: lightgray;
  border-radius: 4px;
  border: solid black 2px;
  padding: 10px;
`;

const ClosingButton = styled(CloseButton)`
  align-self: flex-end;
  font-size: 2rem;
`;

const GameSettings = ({ setShowSettings }) => {
  return (
    <SettingsContainer>
      <ClosingButton onClick={() => setShowSettings(false)} aria-label="Hide" />
      <h1>Choose the difficulty level</h1>
    </SettingsContainer>
  );
};

export default GameSettings;
