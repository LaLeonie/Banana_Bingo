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

const Timer = ({ setTimerdisplay }) => {
  const { display, count } = useCountdown(30);

  useEffect(() => {
    setTimerdisplay(display);
  }, [setTimerdisplay, display]);

  return <TimerDialog role="dialog">{count}</TimerDialog>;
};

export default Timer;
