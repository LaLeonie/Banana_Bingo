import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { getDifficulty, changeDifficulty } from '../../../store/game';

import CloseButton from 'react-bootstrap/CloseButton';
import { BasicButton } from '../../../common/components';

const SettingsContainer = styled.div`
  position: absolute;
  width: 80%;
  height: 100%;
  min-height: 30vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: radial-gradient(
    100% 100% at 100% 0,
    ${({ theme: { colors } }) => colors.primaries.yellow.lightest} 0,
    ${({ theme: { colors } }) => colors.primaries.yellow.main} 100%
  );
  border-radius: 24px;
  border: solid ${({ theme: { colors } }) => colors.primaries.yellow.dark} 15px;
  padding: 10px;
  z-index: 1;
`;

const ClosingButton = styled(CloseButton)`
  align-self: flex-end;
  font-size: 2rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-top: 40px;

  .selected {
    background-color: blue;
    color: #fff;
  }
`;

const Button = styled(BasicButton)`
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
  const dispatch = useDispatch();
  const difficulty = useSelector(getDifficulty);

  const handleButtonClick = (type) => {
    dispatch(changeDifficulty(type));
  };

  return (
    <SettingsContainer>
      <ClosingButton onClick={() => setShowSettings(false)} aria-label="Hide" />
      <h1>Set The Difficulty Level</h1>
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
