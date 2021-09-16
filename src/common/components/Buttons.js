import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const BasicButton = styled(Button)`
  align-items: center;
  appearance: none;
  background-image: radial-gradient(
    100% 100% at 100% 0,
    ${({ theme: { colors } }) => colors.primaries.blue.main} 0,
    ${({ theme: { colors } }) => colors.primaries.blue.dark} 100%
  );
  border: 0;
  border-radius: 16px;
  box-shadow: ${({ theme: { colors } }) => colors.neutrals[500]} 0 2px 4px,
    ${({ theme: { colors } }) => colors.primaries.blue.darkest} 0 7px 13px -3px,
    ${({ theme: { colors } }) => colors.neutrals[500]} 0 -3px 0 inset;
  box-sizing: border-box;
  color: ${({ theme: { colors } }) => colors.white};
  cursor: pointer;
  display: inline-flex;
  font-family: ${({ theme: { fonts } }) => fonts.regular[0]};
  height: 52px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  min-width: 160px;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  text-transform: uppercase;
  transition: box-shadow 0.15s, transform 0.15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow, transform;
  font-size: 18px;
`;

export const PrimaryButton = styled(BasicButton)``;

export const SecondaryButton = styled(BasicButton)``;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
`;
