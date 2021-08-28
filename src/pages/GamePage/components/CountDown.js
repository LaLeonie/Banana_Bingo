import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useCountdown } from '../../../hooks/useCountdown';

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
  let { display, count } = useCountdown(3);

  useEffect(() => {
    setCountdownDisplay(display);
  }, [setCountdownDisplay, display]);

  return (
    <CountdownDialog>
      <div className="countdown-card">{count}</div>
    </CountdownDialog>
  );
};

export default CountDown;
