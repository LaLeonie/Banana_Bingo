const filterColors = (array) => {
  const filteredSet = new Set(array.map((el) => el.fields.Color));
  return Array.from(filteredSet);
};

export default filterColors;
