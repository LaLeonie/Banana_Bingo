import styled from 'styled-components';

export const TitleOne = styled.h1`
  font-family: Ranchers;
  text-align: center;
  font-size: 5rem;
`;

export const GameTitle = styled(TitleOne)`
  font-size: 9rem;
  color: ${({ theme: { colors } }) => colors.neutrals[400]};
`;

export const PageTitle = styled(TitleOne)`
  font-size: 4rem;
`;
