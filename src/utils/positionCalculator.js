function positionCalculator(i) {
  const verts = ['A', 'B', 'C', 'D', 'E'];
  const hors = [1, 2, 3, 4, 5];

  const vertPosition = verts[Math.floor(i / 5)];
  const horPosition = hors[Math.floor(i % 5)];
  return vertPosition + horPosition;
}

export default positionCalculator;
