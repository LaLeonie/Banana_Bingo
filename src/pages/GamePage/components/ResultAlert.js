import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { addSelectedPlans } from '../../../store/user';
import { changeGameStatus } from '../../../store/game';
import { getToday } from '../../../store/user';

const ResultDialog = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .result-card {
    border-radius: 200px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 0 40px;
    height: 260px;
    min-width: 400px;
  }

  .result-card--win {
    background-color: lightgreen;
    border: solid darkgreen 10px;
  }

  .result-card--loose {
    background-color: salmon;
    border: solid red 10px;
  }

  h1 {
    font-size: 5rem;
  }

  p {
    font-size: 1.6rem;
  }
`;

const ResultAlert = ({ selection }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { victory } = useSelector(getToday);
  const cardClass = victory ? `result-card--win` : `result-card--loose`;
  const message = victory ? (
    <>
      <h1>BINGO</h1>
      <p>You win 10 stars</p>
    </>
  ) : (
    <>
      <h1>TIME'S UP</h1>
      <p>No Bingo today</p>
    </>
  );

  useEffect(() => {
    setTimeout(() => {
      history.push('/followup');
      dispatch(changeGameStatus(true));
      dispatch(addSelectedPlans(selection));
    }, 3000);
  }, []);

  return (
    <ResultDialog role="dialog">
      <div className={`result-card ${cardClass}`}>{message}</div>
    </ResultDialog>
  );
};

export default ResultAlert;
