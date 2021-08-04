function scoreCalculator(obj) {
  let scoreSum = 0;
  for (let key in obj) {
    scoreSum += obj[key];
  }
  return scoreSum;
}

export default scoreCalculator;
