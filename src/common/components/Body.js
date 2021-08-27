import styled from 'styled-components';

const Body = styled.section`
  position: relative;
  min-height: 100%;
  margin: auto;
  text-align: center;
  display: ${({ flex }) => flex && 'flex'};
`;

export default Body;
