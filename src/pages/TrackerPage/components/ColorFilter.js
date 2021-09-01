import React from 'react';
import styled from 'styled-components';

const ColorFilterWrapper = styled.div`
  max-width: 50%;
  margin-top: 40px;
  text-align: center;
`;

const ColorPanel = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
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

const ColorFilter = ({ colors, filterPlantsByColor }) => {
  return (
    <ColorFilterWrapper>
      <div>What color had the plant you ate today?</div>
      <ColorPanel>
        {colors.map((el) => (
          <ColorItem
            onClick={() => filterPlantsByColor(el)}
            key={el}
            className={el}
          />
        ))}
      </ColorPanel>
    </ColorFilterWrapper>
  );
};

export default ColorFilter;
