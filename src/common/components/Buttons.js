import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const DefaultButton = styled.button`
  background: #645cff;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  text-transform: capitalize;
  padding: 0.25rem;
  display: block;
  width: 200px;
  margin: 1rem auto;
`;

export const LinkButton = styled(Button)`
  width: 150px;
  background: blue;
  display: inline-block;
  margin: 1rem;
`;
