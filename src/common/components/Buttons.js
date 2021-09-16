import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const BasicButton = styled(Button)`
  align-items: center;
  appearance: none;
  background-image: radial-gradient(
    100% 100% at 100% 0,
    ${({ primary, theme: { colors } }) =>
        primary ? colors.primaries.blue.light : colors.neutrals[50]}
      0,
    ${({ primary, theme: { colors } }) =>
        primary ? colors.primaries.blue.dark : colors.white}
      100%
  );
  border: 0;
  border-radius: 16px;
  box-shadow: ${({ theme: { colors } }) => colors.neutrals[500]} 0 2px 4px,
    ${({ theme: { colors } }) => colors.primaries.blue.darkest} 0 7px 13px -3px,
    ${({ theme: { colors } }) => colors.neutrals[500]} 0 -3px 0 inset;
  box-sizing: border-box;
  color: ${({ primary, theme: { colors } }) =>
    primary ? colors.white : colors.primaries.blue.darkest};
  cursor: pointer;
  display: inline-flex;
  font-family: ${({ theme: { fonts } }) => fonts.regular[0]};
  height: 52px;
  justify-content: center;
  letter-spacing: 0.1rem;
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
  font-size: ${({ theme: { fontSizes } }) => fontSizes.regular};
  font-weight: 700;

  :focus {
    color: ${({ theme: { colors } }) => colors.white};
    background-image: radial-gradient(
      100% 100% at 100% 0,
      ${({ theme: { colors } }) => colors.primaries.orange.light} 0,
      ${({ theme: { colors } }) => colors.primaries.orange.dark} 100%
    );
    box-shadow: ${({ theme: { colors } }) => colors.primaries.orange.darkest} 0
        0 0 1.5px inset,
      rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
      ${({ theme: { colors } }) => colors.primaries.orange.darkest} 0 -4px 0 inset;
  }

  :hover {
    background-image: radial-gradient(
      100% 100% at 100% 0,
      ${({ theme: { colors } }) => colors.primaries.green.light} 0,
      ${({ theme: { colors } }) => colors.primaries.green.dark} 100%
    );
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
      ${({ theme: { colors } }) => colors.primaries.green.darkest} 0 -3px 0 inset;
    transform: translateY(-2px);
  }

  :active {
    box-shadow: ${({ theme: { colors } }) => colors.primaries.blue.dark}0 3px
      7px inset;
    transform: translateY(2px);
  }
`;

export const PrimaryButton = styled(BasicButton)``;

export const SecondaryButton = styled(BasicButton)``;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
`;
