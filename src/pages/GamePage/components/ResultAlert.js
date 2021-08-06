import React from 'react';
import styled from 'styled-components';

const ResultCard = styled.div`
  position: absolute;
  border-radius: 80px;
  background-color: orange;
  border: solid orangered 10px;
  top: 50%;
  left: 50%;
  transform: translate(-200px, -50%);
  width: 400px;
  height: 240px;

  div {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
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
      <div>
        <h1>BINGO</h1>
        <p>You win 10 stars</p>
      </div>
    </ResultCard>
  );
};

export default ResultAlert;
