import React, { useEffect } from 'react';
import ProgressBar from 'react-customizable-progressbar';
import { useCountdown } from '../../../hooks/useCountdown';
import styled from 'styled-components';

const TimerDialog = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  min-height: 10rem;
  min-width: 10rem;
  font-size: 3rem;
`;

const Timer = ({ setTimerdisplay, setPlayedToday }) => {
  const total = 10;
  const { display, count } = useCountdown(total, 1000);

  const getProgress = () => {
    return (count / total) * 100;
  };

  const getColor = () => {
    if (count > total * 0.4) return '#67D723';
    if (count > total * 0.2) return '#FF9000';
    return '#FF3A1A';
  };

  const getSeconds = () => {
    let s = 0;
    s = Math.trunc(count % 60);
    s = ('00' + s).slice(-2);

    return s;
  };

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
      <ProgressBar
        progress={getProgress()}
        radius={80}
        counterClockwise
        strokeColor={getColor()}
      >
        {getSeconds()}
      </ProgressBar>
    </TimerDialog>
  );
};

export default Timer;
