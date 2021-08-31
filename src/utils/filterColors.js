const filterColors = (array) => {
  return new Set(array.map((el) => el.fields.Color));
};

export default filterColors;
