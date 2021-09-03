import React from 'react';
import { Image } from 'react-bootstrap';
import styled from 'styled-components';

const PlantCard = styled.li`
  display: flex;
  flex-direction: column;
  border: solid 2px red;
  justify-content: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
  cursor: ${(props) => (props.selectable ? 'pointer' : 'auto')};
`;

const PlantImage = styled(Image)`
  width: 80px;
  margin: auto;
`;

const PlantItem = ({
  selectable,
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
