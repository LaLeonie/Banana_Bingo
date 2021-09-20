import React from 'react';
import { Image } from 'react-bootstrap';
import styled from 'styled-components';

const Board = styled.ul`
  z-index: 0;
  display: grid;
  grid-gap: 3px;
  grid-template-columns: repeat(5, 85px);
  grid-template-rows: repeat(5, 85px);
  padding: 0;
`;

const GameItem = styled.li`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  justify-content: center;
  list-style-type: none;
  background: rgba(244, 250, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  .selected {
    background: ${({ theme: { colors } }) => colors.primaries.green.lightest};
    background: radial-gradient(
      circle,
      ${({ theme: { colors } }) => colors.primaries.green.lightest} 40%,
      ${({ theme: { colors } }) => colors.primaries.green.main} 100%
    );
    box-shadow: 0px 0px 2px 0
      ${({ theme: { colors } }) => colors.primaries.green.dark};
  }
`;

const GameBoard = ({ randomApiData, handleItemClick }) => {
  return (
    <>
      <Board>
        {randomApiData.map((el, i) => (
          <GameItem key={i} id={i} data-testid={i} onClick={handleItemClick}>
            <Image src={el.fields.Image[0].url} rounded alt={el.fields.Name} />
          </GameItem>
        ))}
      </Board>
    </>
  );
};

export default GameBoard;
