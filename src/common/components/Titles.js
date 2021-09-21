import styled from 'styled-components';

export const TitleOne = styled.h1`
  font-family: ${({ theme: { fonts } }) => fonts.display[0]};
  text-align: center;
`;

export const GameTitle = styled(TitleOne)`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xxl};
  color: ${({ theme: { colors } }) => colors.neutrals[600]};
`;

export const PageTitle = styled(TitleOne)`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.large};
  color: ${({ theme: { colors } }) => colors.neutrals[500]};
  margin-bottom: 4rem;
`;

export const SubTitle = styled.h2`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.regularPlus};
  font-family: ${({ theme: { fonts } }) => fonts.regular[0]};
  font-weight: 700;
  text-transform: uppercase;
  text-decoration-line: underline;
  text-decoration-style: 'solid';
  text-decoration-color: ${({ theme: { colors } }) => colors.neutrals[500]};
  text-decoration-thickness: 3px;
`;
