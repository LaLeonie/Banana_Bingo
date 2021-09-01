import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

const TypeSelector = () => {
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Checkbox aria-label="Checkbox for Fruit" />
        <FormControl aria-label="Fruit" />
      </InputGroup>
      <InputGroup>
        <InputGroup.Checkbox aria-label="Checkbox for Veg" />
        <FormControl aria-label="Veg" />
      </InputGroup>
    </>
  );
};

export default TypeSelector;
