import React from 'react';
import styled from 'styled-components';

import { FilterWrapper } from '../../../common/components/Filter';

const ColorPanel = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;

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

const ColorItem = styled.div`
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid black;
  height: 30px;
  width: 30px;
`;

const ColorFilter = ({ setColor, colors }) => {
  return (
    <FilterWrapper>
      <div>What other colors did you eat today?</div>
      <ColorPanel>
        {colors.map((el) => (
          <ColorItem onClick={() => setColor(el)} key={el} className={el} />
        ))}
      </ColorPanel>
    </FilterWrapper>
  );
};

export default ColorFilter;
