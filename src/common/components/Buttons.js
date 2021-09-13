import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const BasicButton = styled(Button)`
  border-radius: 10px;
  cursor: pointer;
  display: inline-block;
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: capitalize;
  padding: 0.5rem 1rem;
  min-width: 200px;
`;

export const PrimaryButton = styled(BasicButton)`
  border: blue solid 2px;
  background: blue;
`;

export const SecondaryButton = styled(BasicButton)`
  border: blue solid 2px;
  background-color: #fff;
  color: blue;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 4px;
`;
