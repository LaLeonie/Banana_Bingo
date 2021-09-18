import styled from 'styled-components';

export const TitleOne = styled.h1`
  font-family: ${({ theme: { fonts } }) => fonts.display[0]};
  text-align: center;
  font-size: 5rem;
`;

export const GameTitle = styled(TitleOne)`
  font-size: 9rem;
  color: ${({ theme: { colors } }) => colors.neutrals[600]};
`;

export const PageTitle = styled(TitleOne)`
  font-size: 4rem;
  color: ${({ theme: { colors } }) => colors.neutrals[500]};
`;
