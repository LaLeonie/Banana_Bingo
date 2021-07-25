import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
  flex-grow: 4;
  text-align: center;
  font-size: 2rem;
`;

const Logo = () => {
  return <LogoContainer>Banana Bingo</LogoContainer>;
};

export default Logo;
