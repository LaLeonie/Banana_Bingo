import React, { useState } from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';

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

const difficulties = ['easy', 'medium', 'hard'];

const GameSettings = ({ setShowSettings }) => {
  const [difficulty, setDifficulty] = useState('medium');
  return (
    <SettingsContainer>
      <ClosingButton onClick={() => setShowSettings(false)} aria-label="Hide" />
      <h1>Choose the difficulty level</h1>
      <>
        {difficulties.map((type) => (
          <div key={`default-${type}`}>
            <Form.Check type="radio" id={`default-${type}`} label={type} />
          </div>
        ))}
      </>
    </SettingsContainer>
  );
};

export default GameSettings;
