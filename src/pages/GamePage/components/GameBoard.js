import React from 'react';

import { Image } from 'react-bootstrap';

import styled from 'styled-components';

const Board = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 100px);
  grid-template-rows: repeat(5, 100px);
`;

const GameItem = styled.li`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  justify-content: center;
  list-style-type: none;
  border: solid 1px lightgrey;
  border-radius: 4px;
`;

function handleItemClick(e) {
  console.log(e.target.parentNode);
}

const GameBoard = ({ plants }) => {
  console.log(plants);
  return (
    <Board>
      {plants.map((el) => (
        <GameItem key={el.fields.Name} onClick={handleItemClick}>
          <Image src={el.fields.Image[0].url} rounded alt={el.fields.Name} />
        </GameItem>
      ))}
    </Board>
  );
};

export default GameBoard;
