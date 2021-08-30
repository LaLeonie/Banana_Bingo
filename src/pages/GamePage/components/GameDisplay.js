import React from 'react';
import styled from 'styled-components';

import GameBoard from './GameBoard';

const GameDisplayContainer = styled.div`
  min-height: 550px;
  margin: auto;
`;

const GameDisplay = ({
  isLoading,
  serverError,
  randomApiData,
  selection,
  setSelection,
  handleItemClick,
}) => {
  return (
    <GameDisplayContainer>
      {isLoading && <span>Loading ... </span>}
      {!isLoading && serverError && <span>Error in Fetching data ... </span>}
      {!isLoading && randomApiData && (
        <GameBoard
          randomApiData={randomApiData}
          selection={selection}
          setSelection={setSelection}
          handleItemClick={handleItemClick}
        />
      )}
    </GameDisplayContainer>
  );
};

export default GameDisplay;
