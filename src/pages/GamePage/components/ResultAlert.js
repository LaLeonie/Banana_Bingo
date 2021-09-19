import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { getToday } from '../../../store/user';

import { TitleOne } from '../../../common/components';

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
    z-index: 1;
  }

  .result-card--win {
    background-color: lightgreen;
    border: solid darkgreen 10px;
  }

  .result-card--loose {
    background-color: salmon;
    border: solid red 10px;
  }

  p {
    font-size: 1.6rem;
  }
`;

const ResultAlert = ({ endGame }) => {
  const { victory } = useSelector(getToday);
  const cardClass = victory ? `result-card--win` : `result-card--loose`;
  const message = victory ? (
    <>
      <TitleOne>BINGO</TitleOne>
      <p>You win 10 stars</p>
    </>
  ) : (
    <>
      <TitleOne>TIME'S UP</TitleOne>
      <p>No Bingo today</p>
    </>
  );

  useEffect(() => {
    setTimeout(() => {
      endGame();
    }, 3000);
  }, []);

  return (
    <ResultDialog role="dialog">
      <div className={`result-card ${cardClass}`}>{message}</div>
    </ResultDialog>
  );
};

export default ResultAlert;
