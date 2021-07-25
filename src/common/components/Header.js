import styled from 'styled-components';

const Header = styled.section`
  display: flex;
  justify-content: ${({ full }) => (full ? 'space-between' : 'flex-end')};
  margin-bottom: 1rem;
  margin-top: 0;
`;

export default Header;
