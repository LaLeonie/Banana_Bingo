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

const PlantList = ({
  selectable,
  plants,
  displayName,
  selected,
  handlePlanItemClick,
}) => {
  return (
    <PlantListFlex>
      {plants &&
        plants.map((el) => (
          <PlantItem
            selectable
            handlePlanItemClick={handlePlanItemClick}
            selected={selected}
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
