import { positionCalculator } from '.';

describe('positionCalculator returns expected position', () => {
  it('renders correct first position', () => {
    expect(positionCalculator(0)).toBe('A1');
  });

  it('renders correct last position', () => {
    expect(positionCalculator(24)).toBe('E5');
  });

  it('renders correct center position', () => {
    expect(positionCalculator(13)).toBe('C4');
  });
});
