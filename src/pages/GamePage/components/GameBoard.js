import React from 'react';
import { Image } from 'react-bootstrap';
import styled from 'styled-components';

const Board = styled.ul`
  z-index: 0;
  display: grid;
  padding: 30px;
  grid-gap: 3px;
  grid-template-columns: repeat(5, 100px);
  grid-template-rows: repeat(5, 100px);
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
    background: rgba(103, 215, 35, 0.65);
    background: radial-gradient(
      circle,
      rgba(103, 215, 35, 0.65) 40%,
      rgba(61, 127, 21, 0.55) 100%
    );
    box-shadow: 0px 0px 2px 0 rgba(61, 127, 21, 0.9);
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
