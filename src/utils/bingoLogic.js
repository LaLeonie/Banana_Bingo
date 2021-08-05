function bingoLogic(array) {
  const posArr = array.reduce((a, v) => a.concat(v.split('')), []);
  const uniques = [...new Set(posArr)];

  //check for diagnoal bingo
  if (uniques.length === posArr.length) {
    return true;
  }

  //check for horizontal or vertical bingo
  const countOccurrences = (arr, val) =>
    arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

  for (let i = 0; i < uniques.length; i++) {
    const occurences = countOccurrences(posArr, uniques[i]);
    if (occurences === 5) {
      return true;
    }
  }

  return false;
}

export default bingoLogic;
