import React from 'react';
import styled from 'styled-components';

import { FilterWrapper } from '../../../common/components/Filter';

const ColorPanel = styled.ul`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  list-style: none;

  .selected {
    border: none;
    box-shadow: 0 0 0 3pt black;
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

  .Orange {
    background-color: orange;
  }

  .Purple {
    background-color: purple;
  }

  .Brown {
    background-color: brown;
  }

  .Blue {
    background-color: darkblue;
  }
`;

const ColorItem = styled.li`
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid black;
  height: 30px;
  width: 30px;
`;

const ColorFilter = ({ setColor, colors }) => {
  const handleColorSelect = (e, col) => {
    setColor(col);
    e.target.parentNode
      .querySelectorAll('li')
      .forEach((el) => el.classList.remove('selected'));

    e.target.classList.toggle('selected');
  };

  return (
    <FilterWrapper>
      <div>What other colors did you eat today?</div>
      <ColorPanel>
        {colors.map((el) => (
          <ColorItem
            onClick={(e) => handleColorSelect(e, el)}
            key={el}
            className={el}
          />
        ))}
      </ColorPanel>
    </FilterWrapper>
  );
};

export default ColorFilter;
