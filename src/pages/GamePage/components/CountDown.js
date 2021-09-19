import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useCountdown } from '../../../hooks/useCountdown';

const CountdownModal = styled.div`
  position: absolute;
  width: 100%;
  height: 110%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme: { colors } }) => colors.neutrals[50]};
  font-size: 10rem;
  text-transform: uppercase;
  z-index: 1;
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
    <CountdownModal role="dialog" data-testid="countdown-dialog">
      <div className="countdown-card">{displayText}</div>
    </CountdownModal>
  );
};

export default CountDown;
