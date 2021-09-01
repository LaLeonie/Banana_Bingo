import React from 'react';
import styled from 'styled-components';

const ColorPanel = styled.div`
  display: flex;
  max-width: 400px;
  justify-content: space-between;
  flex-wrap: wrap;

  .Black {
    background-color: black;
  }

  .Red {
    background-color: red;
  }

  .Green {
    background-color: green;
  }

  .Yellow {
    background-color: yellow;
  }

  .White {
    background-color: white;
  }

  .Blue {
    background-color: blue;
  }

  .Orange {
    background-color: orange;
  }

  .Purple {
    background-color: purple;
  }

  .Brown {
    background-color: brown;
  }
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
