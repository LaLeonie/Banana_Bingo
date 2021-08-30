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

const PlantItem = ({ name, image }) => {
  console.log(image);
  return (
    <PlantCard key={name}>
      <PlantImage src={image} roundedCircle responsive="true" />
      <p>{name}</p>
    </PlantCard>
  );
};

export default PlantItem;
