import React from 'react';
import styled from 'styled-components';

const SettingsContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: yellow;
  border-radius: 4px;
  border: solid black 2px;
`;

const GameSettings = () => {
  return <SettingsContainer></SettingsContainer>;
};

export default GameSettings;
