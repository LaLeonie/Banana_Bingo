import React, { useState } from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';

import CloseButton from 'react-bootstrap/CloseButton';
import { PrimaryButton } from '../../../common/components';

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

const ButtonGroup = styled.div`
  display: flex;

  .selected {
    background-color: blue;
    color: #fff;
  }
`;

const Button = styled(PrimaryButton)`
  margin: 0;
  border-radius: 0;
  background-color: #fff;
  color: blue;
  :last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  :first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
`;

const difficulties = ['easy', 'medium', 'hard'];

const GameSettings = ({ setShowSettings }) => {
  const [difficulty, setDifficulty] = useState('medium');

  const handleButtonClick = (type) => {
    setDifficulty(type);
  };

  return (
    <SettingsContainer>
      <ClosingButton onClick={() => setShowSettings(false)} aria-label="Hide" />
      <h1>Choose the difficulty level</h1>
      <ButtonGroup>
        {difficulties.map((type) => (
          <Button
            className={difficulty === type ? 'selected' : ''}
            key={type}
            onClick={() => handleButtonClick(type)}
          >
            {type}
          </Button>
        ))}
      </ButtonGroup>
    </SettingsContainer>
  );
};

export default GameSettings;
