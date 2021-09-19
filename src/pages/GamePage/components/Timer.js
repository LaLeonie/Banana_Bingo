import React, { useEffect } from 'react';
import { useCountdown } from '../../../hooks/useCountdown';
import styled from 'styled-components';

const TimerDialog = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  min-height: 10rem;
  min-width: 10rem;
  font-size: 4rem;
  background: #f4faff;
  border-radius: 100%;
  box-shadow: 9.91px 9.91px 26px #a2a6aa, -9.91px -9.91px 26px #ffffff;
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

  return (
    <TimerDialog role="dialog" data-testid="timer-dialog">
      {count}
    </TimerDialog>
  );
};

export default Timer;
