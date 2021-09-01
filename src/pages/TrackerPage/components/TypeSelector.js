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

const TypeSelector = ({ changeCheck, vegCheck, fruitCheck }) => {
  return (
    <FilterWrapper>
      <div>What other type of plants did you eat today?</div>
      <TypePanel>
        <Form.Group>
          <Form.Check
            onChange={() => changeCheck('fruit')}
            checked={fruitCheck}
            type="checkbox"
            label="Fruit"
          />
        </Form.Group>
        <Form.Group>
          <Form.Check
            onChange={() => changeCheck('veg')}
            checked={vegCheck}
            type="checkbox"
            label="Veg"
          />
        </Form.Group>
      </TypePanel>
    </FilterWrapper>
  );
};

export default TypeSelector;
