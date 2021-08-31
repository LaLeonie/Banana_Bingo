import React from 'react';
import styled from 'styled-components';

import { PlantItem } from '.';

const PlantListFlex = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px;
  margin: 20px auto;
  padding: 0;
`;

const PlantList = ({ plants, displayName }) => {
  return (
    <PlantListFlex>
      {plants.map((el) => (
        <PlantItem
          displayName={displayName}
          key={el.id}
          name={el.fields.Name}
          image={el.fields.Image[0].url}
        />
      ))}
    </PlantListFlex>
  );
};

export default PlantList;
