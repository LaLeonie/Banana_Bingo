import React from 'react';
import { selectPlant, getToday } from '../../../store/user';
import { getApiPlants } from '../../../store/game';
import { useSelector, useDispatch } from 'react-redux';
import { positionCalculator } from '../../../utils';
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

  .selected {
    background-color: lightskyblue;
    border: 2px solid slateblue;
  }
`;

const GameBoard = ({ plants }) => {
  const dispatch = useDispatch();
  const displayedPlants = useSelector(getApiPlants);

  function handleItemClick(e) {
    const plantName = e.target.alt;
    if (plantName) {
      const index = e.target.parentNode.id;
      const selectedPlant = displayedPlants.find(
        (plant) => plant.fields.Name === plantName
      );
      selectedPlant.position = positionCalculator(index);
      dispatch(selectPlant(selectedPlant));
      e.target.classList.toggle('selected');
    }
  }
  return (
    <Board>
      {plants.map((el, i) => (
        <GameItem key={i} id={i} onClick={handleItemClick}>
          <Image src={el.fields.Image[0].url} rounded alt={el.fields.Name} />
        </GameItem>
      ))}
    </Board>
  );
};

export default GameBoard;
