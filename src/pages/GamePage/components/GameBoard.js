import React from 'react';
import { useSelector } from 'react-redux';

const GameBoard = () => {
  const planstDisplayed = useSelector(
    (state) => state.gameData.planstDisplayed
  );
  return (
    <div>
      {planstDisplayed.map((el) => (
        <div>{el}</div>
      ))}
    </div>
  );
};

export default GameBoard;
