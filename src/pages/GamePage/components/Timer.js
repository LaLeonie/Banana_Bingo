import React from 'react';
import { useCountdown } from '../../../hooks/useCountdown';
import styled from 'styled-components';

const TimerDialog = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  min-height: 5rem;
  min-width: 5rem;
  border: solid red 2px;
`;

const Timer = () => {
  const { display, count } = useCountdown(30);
  return <TimerDialog role="dialog">{count}</TimerDialog>;
};

export default Timer;
