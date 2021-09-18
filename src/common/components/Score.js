import styled from 'styled-components';

export const ScoreContainer = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  color: ${({ theme: { colors } }) => colors.neutrals[600]};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.regularPlus};
`;
