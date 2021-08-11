import React from 'react';
import { Image } from 'react-bootstrap';
import styled from 'styled-components';

const PlantCard = styled.li`
  display: flex;
  flex-direction: column;

  justify-content: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const PlantImage = styled(Image)`
  border: solid black 1px;
`;

const PlantItem = ({ name, amount, img }) => {
  return (
    <PlantCard key={name}>
      <PlantImage src={img} roundedCircle responsive="true" />
      <h3>{name}</h3>
      <p>{amount}</p>
    </PlantCard>
  );
};

export default PlantItem;
