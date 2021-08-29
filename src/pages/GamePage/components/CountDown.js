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
    background-color: #fff;
    border-radius: 4px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 550px;
    width: 550px;
    font-size: 10rem;
  }
`;

const CountDown = ({ setCountdownDisplay }) => {
  let [displayText, setDisplayText] = useState('');
  let { display, count } = useCountdown(3, 500);

  useEffect(() => {
    setCountdownDisplay(display);
  }, [setCountdownDisplay, display]);

  useEffect(() => {
    switch (count) {
      case 3:
        setDisplayText('Ready');
        break;
      case 2:
        setDisplayText('Steady');
        break;
      case 1:
        setDisplayText('GO');
        break;
      default:
        setDisplayText('');
    }
  }, [setDisplayText, count]);

  return (
    <CountdownDialog role="dialog" data-testid="countdown-dialog">
      <div className="countdown-card">{displayText}</div>
    </CountdownDialog>
  );
};

export default CountDown;
