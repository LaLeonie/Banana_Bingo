import React from 'react';
import { Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';

const TypeSelectorWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const TypeSelector = () => {
  return (
    <TypeSelectorWrapper>
      <Form.Group>
        <Form.Check checked type="checkbox" label="Fruit" />
      </Form.Group>
      <Form.Group>
        <Form.Check checked type="checkbox" label="Veg" />
      </Form.Group>
    </TypeSelectorWrapper>
  );
};

export default TypeSelector;
