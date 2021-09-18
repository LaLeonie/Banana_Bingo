import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { PageTitle } from '../../../common/components';
import { getDifficulty, changeDifficulty } from '../../../store/game';

import CloseButton from 'react-bootstrap/CloseButton';
import { BasicButton } from '../../../common/components';

const SettingsModal = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  min-height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
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
  ${({ theme: { colors } }) => colors.neutrals[500]}
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-top: 40px;

  .selected {
    background-image: radial-gradient(
      100% 100% at 100% 0,
      ${({ theme: { colors } }) => colors.primaries.green.light} 0,
      ${({ theme: { colors } }) => colors.primaries.green.dark} 100%
    );
    color: ${({ theme: { colors } }) => colors.white};
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
      ${({ theme: { colors } }) => colors.primaries.green.darkest} 0 -3px 0 inset;
    transform: translateY(0px);
  }
`;

const Button = styled(BasicButton)`
  margin: 0;
  border-radius: 0;
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
    <SettingsModal>
      <ClosingButton onClick={() => setShowSettings(false)} aria-label="Hide" />
      <PageTitle>Set The Difficulty Level</PageTitle>
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
    </SettingsModal>
  );
};

export default GameSettings;
