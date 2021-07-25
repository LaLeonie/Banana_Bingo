import styled from 'styled-components';

const Footer = styled.section`
  display: flex;
  justify-content: ${({ centered }) => (centered ? 'center' : 'flex-end')};
  margin-bottom: 0rem;
  margin-top: 1rem;
`;

export default Footer;
