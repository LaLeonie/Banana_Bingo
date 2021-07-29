import React from 'react';
import { useSelector } from 'react-redux';
import { Image } from 'react-bootstrap';

import styled from 'styled-components';

const PlantIcon = styled(Image)`
  border: solid black 1px;
`;

const Board = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 100px);
  grid-template-rows: repeat(5, 100px);
`;

const GameItem = styled.li`
  display: flex;
  flex-direction: column;

  justify-content: center;
  list-style-type: none;
`;

const GameBoard = ({ plants }) => {
  console.log({ plants });
  return (
    <Board>
      {plants.map((el) => (
        <GameItem key={el.fields.Name}>
          <Image src={el.fields.Image[0].url} rounded responsive />
        </GameItem>
      ))}
    </Board>
  );
};

export default GameBoard;
