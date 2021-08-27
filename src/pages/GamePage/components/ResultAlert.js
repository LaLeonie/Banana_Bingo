import React from 'react';
import styled from 'styled-components';

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
    height: 240px;
    width: 400px;
  }

  .result-card--win {
    background-color: lightgreen;
    border: solid darkgreen 10px;
  }

  h1 {
    font-size: 5rem;
  }

  p {
    font-size: 1.6rem;
  }
`;

const ResultAlert = () => {
  return (
    <ResultDialog role="dialog">
      <div className="result-card result-card--win">
        <h1>BINGO</h1>
        <p>You win 10 stars</p>
      </div>
    </ResultDialog>
  );
};

export default ResultAlert;
