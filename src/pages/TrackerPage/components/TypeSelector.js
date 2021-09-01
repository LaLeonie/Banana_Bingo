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

const TypeSelector = () => {
  return (
    <FilterWrapper>
      <div>What color had the plant you ate today?</div>
      <TypePanel>
        <Form.Group>
          <Form.Check checked type="checkbox" label="Fruit" />
        </Form.Group>
        <Form.Group>
          <Form.Check checked type="checkbox" label="Veg" />
        </Form.Group>
      </TypePanel>
    </FilterWrapper>
  );
};

export default TypeSelector;
