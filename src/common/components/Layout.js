import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 1em;
`;

const Layout = ({ children }) => <Container>{children}</Container>;

export default Layout;
