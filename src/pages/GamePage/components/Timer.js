import React, { useEffect } from 'react';
import { useCountdown } from '../../../hooks/useCountdown';
import styled from 'styled-components';

const TimerDialog = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  min-height: 10rem;
  min-width: 10rem;
  border-radius: 50%;
  font-size: 4rem;
  background-color: lightgray;
  border: solid grey 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Timer = ({ setTimerdisplay, setPlayedToday }) => {
  const { display, count } = useCountdown(10, 1000);

  useEffect(() => {
    setTimerdisplay(display);
  }, [setTimerdisplay, display]);

  useEffect(() => {
    if (count === 0) {
      setPlayedToday(true);
    }
  }, [count]);

  return <TimerDialog role="dialog">{count}</TimerDialog>;
};

export default Timer;
