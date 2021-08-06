import styled from 'styled-components';

const Body = styled.section`
  position: relative;
  margin: auto;
  text-align: center;
  display: ${({ flex }) => flex && 'flex'};
`;

export default Body;
