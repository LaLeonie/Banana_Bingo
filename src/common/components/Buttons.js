import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const PrimaryButton = styled(Button)`
  border: blue solid 2px;
  width: 200px;
  background: blue;
  display: inline-block;
  margin: 1rem;
`;

export const SecondaryButton = styled(Button)`
  border: blue solid 2px;
  background-color: #fff;
  color: blue;
  border-radius: 0.25rem;
  cursor: pointer;
  text-transform: capitalize;
  padding: 0.25rem;
  display: block;
  width: 200px;
  margin: 1rem auto;
`;
