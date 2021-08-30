import React from 'react';
import styled from 'styled-components';

const Score = styled.div`
  margin-top: 5vh;
  font-size: 2rem;
`;

const ExtraScore = ({ amount }) => {
  return <Score>{amount} extra stars</Score>;
};

export default ExtraScore;
