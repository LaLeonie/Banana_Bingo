import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
  flex-grow: 4;
  font-family: ${({ theme: { fonts } }) => fonts.display[0]};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
  color: ${({ theme: { colors } }) => colors.neutrals[500]};
  text-align: center;
`;

const Logo = () => {
  return <LogoContainer>Banana Bingo</LogoContainer>;
};

export default Logo;
