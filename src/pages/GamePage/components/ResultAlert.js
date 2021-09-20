import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { getToday } from '../../../store/user';

import { TitleOne } from '../../../common/components';

const ResultModal = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const ResultContainer = styled.div`
  align-items: center;
  background-image: radial-gradient(
    100% 100% at 100% 0,
    ${({ victory, theme: { colors } }) =>
        victory ? colors.primaries.green.light : colors.primaries.red.light}
      0,
    ${({ victory, theme: { colors } }) =>
        victory ? colors.primaries.green.main : colors.primaries.red.main}
      100%
  );

  box-shadow: ${({ victory, theme: { colors } }) =>
        victory ? colors.primaries.green.dark : colors.primaries.red.dark}
      0px -23px 25px 0px inset,
    ${({ victory, theme: { colors } }) =>
        victory ? colors.primaries.green.main : colors.primaries.red.main}
      0px -36px 30px 0px inset,
    ${({ victory, theme: { colors } }) =>
        victory ? colors.primaries.green.main : colors.primaries.red.main}
      0px -79px 40px 0px inset,
    rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.1) 0px 8px 4px, rgba(0, 0, 0, 0.15) 0px 16px 8px,
    rgba(0, 0, 0, 0.2) 0px 32px 16px, 2px 2px 119px 28px rgba(0, 0, 0, 0.4);
  border-radius: 150px;
  display: flex;
  flex-direction: column;
  height: 260px;
  justify-content: center;
  min-width: 400px;
  padding: 0 40px;
  z-index: 1;
`;

const ResultAlert = ({ endGame }) => {
  const { victory } = useSelector(getToday);

  const message = victory ? (
    <>
      <TitleOne>BINGO</TitleOne>
      <p>You win 10 stars</p>
    </>
  ) : (
    <>
      <TitleOne>TIME'S UP</TitleOne>
      <p>No Bingo today</p>
    </>
  );

  useEffect(() => {
    setTimeout(() => {
      endGame();
    }, 3000);
  }, []);

  return (
    <ResultModal>
      <ResultContainer victory>{message}</ResultContainer>
    </ResultModal>
  );
};

export default ResultAlert;
