import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CountdownDialog = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .countdown-card {
    background-color: lightgrey;
    border: solid grey 10px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 550px;
    width: 550px;
    font-size: 12rem;
  }
`;

const CountDown = ({ setCountdownDisplay }) => {
  let [count, setCount] = useState(3);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCount(count--);
    }, 500);
    if (count === 0) {
      setCountdownDisplay(false);
    }
    return () => clearInterval(timerId);
  });

  return (
    <CountdownDialog>
      <div className="countdown-card">{count}</div>
    </CountdownDialog>
  );
};

export default CountDown;
