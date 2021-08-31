import React from 'react';
import styled from 'styled-components';

const returnColor = (color) => {
  switch (color) {
    case 'Red':
      return 'red';
    case 'Yellow':
      return 'yellow';
    default:
      return 'black';
  }
};

const ColorItem = styled.div`
  width: 10px;
  height: 10px;
  border: 1px solid black;
`;

const ColorFilter = ({ colors }) => {
  return (
    <>
      {colors.map((el) => (
        <ColorItem className={el} />
      ))}
    </>
  );
};

export default ColorFilter;
