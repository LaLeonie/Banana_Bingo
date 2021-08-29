import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useCountdown } from '../../../hooks/useCountdown';
import styled from 'styled-components';

import { changeGameStatus } from '../../../store/game';

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
  const dispatch = useDispatch();

  useEffect(() => {
    setTimerdisplay(display);
  }, [setTimerdisplay, display]);

  useEffect(() => {
    if (count === 0) {
      setPlayedToday(true);
      dispatch(changeGameStatus(true));
    }
  }, [count]);

  return <TimerDialog role="dialog">{count}</TimerDialog>;
};

export default Timer;
