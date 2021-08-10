import bingoLogic from './bingoLogic';

describe('bingoLogic returns exptected boolean', () => {
  it('should return true on horizontal bingo', () => {
    const horPositions = ['A1', 'B1', 'C1', 'D1', 'E1'];
    expect(bingoLogic(horPositions)).toBeTruthy();
  });
});
