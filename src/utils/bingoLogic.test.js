import bingoLogic from './bingoLogic';

describe('bingoLogic returns exptected boolean', () => {
  it('should return true on horizontal bingo', () => {
    const horPositions = ['A1', 'B1', 'C1', 'D1', 'E1'];
    expect(bingoLogic(horPositions)).toBeTruthy();
  });

  it('should return true on vertical bingos', () => {
    const verPositions = ['A1', 'A2', 'A3', 'A4', 'A5'];
    expect(bingoLogic(verPositions)).toBeTruthy();
  });

  it('should return true on downwards diagnoal bingos', () => {
    const diagnoalDown = ['A1', 'B2', 'C3', 'D4', 'E5'];
    expect(bingoLogic(diagnoalDown)).toBeTruthy();
  });

  it('should return true on upward diagnoal bingos', () => {
    const diagnoalUp = ['E1', 'D2', 'C3', 'B4', 'A5'];
    expect(bingoLogic(diagnoalUp)).toBeTruthy();
  });

  it('should return false on no Bingo', () => {
    const noBingo = ['E4', 'C2', 'A3', 'C4', 'A5', 'E1', 'D4'];
    expect(bingoLogic(noBingo)).toBeFalsy();
  });

  it('should return true bingo when more than five selected', () => {
    const moreThanFive = ['A1', 'B2', 'C3', 'D4', 'E5', 'A2', 'C4'];
    expect(bingoLogic(moreThanFive)).toBeTruthy();
  });
});
