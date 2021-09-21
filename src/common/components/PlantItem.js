import React from 'react';
import { Image } from 'react-bootstrap';
import styled from 'styled-components';

const PlantCard = styled.li`
  display: flex;
  cursor: ${({ selectable }) => (selectable ? 'pointer' : 'auto')};
  flex-direction: column;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.regular};
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const PlantImage = styled(Image)`
  width: 70px;
  margin: auto;
`;

const PlantItem = ({
  name,
  image,
  displayName,
  selected,
  handlePlanItemClick,
}) => {
  return (
    <PlantCard
      selectable
      name={name}
      key={name}
      className={selected ? 'item--selected' : 'item--unselected'}
      onClick={handlePlanItemClick}
    >
      <PlantImage src={image} roundedCircle responsive="true" />
      {displayName && <p>{name}</p>}
    </PlantCard>
  );
};

export default PlantItem;
