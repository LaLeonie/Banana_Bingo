import React from 'react';
import styled from 'styled-components';

import { PlantItem } from '.';

const PlantListFlex = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
`;

const PlantList = ({ plants }) => {
  console.log(plants);
  return (
    <PlantListFlex>
      {plants.map((el) => (
        <PlantItem
          key={el.id}
          name={el.fields.Name}
          image={el.fields.Image[0].url}
        />
      ))}
    </PlantListFlex>
  );
};

export default PlantList;
