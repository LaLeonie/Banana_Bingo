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
    background: linear-gradient(
      145deg,
      ${({ theme: { colors } }) => colors.primaries.red.main},
      ${({ theme: { colors } }) => colors.primaries.red.dark}
    );
    box-shadow: ${({ theme: { colors } }) => colors.primaries.red.darkest} 0 -3px
      0 inset;
  }

  .Green {
    background: linear-gradient(
      145deg,
      ${({ theme: { colors } }) => colors.primaries.green.main},
      ${({ theme: { colors } }) => colors.primaries.green.dark}
    );
    box-shadow: ${({ theme: { colors } }) => colors.primaries.green.darkest} 0 -3px
      0 inset;
  }

  .Yellow {
    background: linear-gradient(
      145deg,
      ${({ theme: { colors } }) => colors.primaries.yellow.main},
      ${({ theme: { colors } }) => colors.primaries.yellow.dark}
    );
    box-shadow: ${({ theme: { colors } }) => colors.primaries.yellow.darkest} 0 -3px
      0 inset;
  }

  .Orange {
    background: linear-gradient(
      145deg,
      ${({ theme: { colors } }) => colors.primaries.orange.main},
      ${({ theme: { colors } }) => colors.primaries.orange.dark}
    );
    box-shadow: ${({ theme: { colors } }) => colors.primaries.orange.darkest} 0 -3px
      0 inset;
  }

  .Purple {
    background: linear-gradient(
      145deg,
      ${({ theme: { colors } }) => colors.primaries.purple.main},
      ${({ theme: { colors } }) => colors.primaries.purple.dark}
    );
    box-shadow: ${({ theme: { colors } }) => colors.primaries.purple.darkest} 0 -3px
      0 inset;
  }

  .Brown {
    background: linear-gradient(
      145deg,
      ${({ theme: { colors } }) => colors.primaries.brown.main},
      ${({ theme: { colors } }) => colors.primaries.brown.dark}
    );
    box-shadow: ${({ theme: { colors } }) => colors.primaries.brown.darkest} 0 -3px
      0 inset;
  }

  .Blue {
    background: linear-gradient(
      145deg,
      ${({ theme: { colors } }) => colors.primaries.blue.main},
      ${({ theme: { colors } }) => colors.primaries.blue.dark}
    );
    box-shadow: ${({ theme: { colors } }) => colors.primaries.blue.darkest} 0 -3px
      0 inset;
  }
`;

const ColorItem = styled.li`
  cursor: pointer;
  height: 30px;
  width: 30px;
  border-radius: 100%;
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
