import React from 'react';
import styled from 'styled-components';

const ResultCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  div {
    border-radius: 200px;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 240px;
    width: 400px;
  }

  .result--win {
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
    <ResultCard>
      <div role="dialog" className="result--win">
        <h1>BINGO</h1>
        <p>You win 10 stars</p>
      </div>
    </ResultCard>
  );
};

export default ResultAlert;
