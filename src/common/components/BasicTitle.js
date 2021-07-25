import styled from 'styled-components';

const BasicTitle = styled.h1`
  text-align: center;
  text-transform: capitalize;
  font-size: ${({ main }) => (main ? '9rem' : '6rem')};
`;

export default BasicTitle;
