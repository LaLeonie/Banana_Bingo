import React, { useEffect } from 'react';
import ProgressBar from 'react-customizable-progressbar';
import { useCountdown } from '../../../hooks/useCountdown';
import styled from 'styled-components';

const TimerContainer = styled.div`
  position: absolute;
  right: -10px;
  top: 0;
  text-align: center;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.regular};
`;

const TimerDisplay = styled.div`
  position: absolute;
  line-height: 0.9;
  top: 30%;
  width: 100%;
  height: 100%;
`;

const Time = styled.div`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.large};
`;

const Timer = ({ setTimerdisplay, setPlayedToday }) => {
  const total = 30;
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
    <TimerContainer role="dialog" data-testid="timer-dialog">
      <ProgressBar
        trackStrokeColor={'transparent'}
        progress={getProgress()}
        radius={70}
        counterClockwise
        strokeColor={getColor()}
      >
        <TimerDisplay>
          <Time>{getSeconds()}</Time>
          <p>SECONDS</p>
        </TimerDisplay>
      </ProgressBar>
    </TimerContainer>
  );
};

export default Timer;
