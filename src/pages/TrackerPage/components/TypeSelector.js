import React from 'react';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';

import { FilterWrapper } from '../../../common/components/Filter';

const TypePanel = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 20px;
  margin: 20px 0;
`;

const Checkbox = styled(Form.Group)`
  input {
    cursor: pointer;
  }
`;

const TypeSelector = ({ setFruitCheck, setVegCheck, vegCheck, fruitCheck }) => {
  const changeCheck = (type) => {
    if (type === 'fruit') {
      setFruitCheck(!fruitCheck);
    } else {
      setVegCheck(!vegCheck);
    }
  };

  return (
    <FilterWrapper>
      <div>What other type of plants did you eat today?</div>
      <TypePanel>
        <Checkbox>
          <Form.Check
            onChange={() => changeCheck('fruit')}
            checked={fruitCheck}
            type="checkbox"
            label="Fruit"
          />
        </Checkbox>
        <Checkbox>
          <Form.Check
            onChange={() => changeCheck('veg')}
            checked={vegCheck}
            type="checkbox"
            label="Veg"
          />
        </Checkbox>
      </TypePanel>
    </FilterWrapper>
  );
};

export default TypeSelector;
