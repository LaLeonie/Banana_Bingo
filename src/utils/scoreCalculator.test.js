import { scoreCalculator } from '.';

describe('scoreCalcutator returns expected score', () => {
  it('returns sum if two values are provided', () => {
    const obj = { initial: 3, extra: 2 };
    expect(scoreCalculator(obj)).toBe(5);
  });

  it('returns sum if only one value provided', () => {
    const obj = { initial: 4 };
    expect(scoreCalculator(obj)).toBe(4);
  });
});
