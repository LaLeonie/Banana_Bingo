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
const ColorPanel = styled.div`
  display: flex;
  max-width: 400px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ColorItem = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid black;
`;

const ColorFilter = ({ colors }) => {
  return (
    <ColorPanel>
      {colors.map((el) => (
        <ColorItem key={el} className={el} />
      ))}
    </ColorPanel>
  );
};

export default ColorFilter;
