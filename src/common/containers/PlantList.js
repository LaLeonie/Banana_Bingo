import React from 'react';
import styled from 'styled-components';
import testImage from './../../logo.svg'; //test image

import { useSelector } from 'react-redux';
import { PlantItem } from '../components';

const PlantListFlex = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
`;

const PlantList = () => {
  const todaysPlants = useSelector((state) => state.userData.today.dailyPlants);

  return (
    <PlantListFlex>
      {todaysPlants.map((el) => (
        <PlantItem name={el.name} amount={el.amount} image={testImage} />
      ))}
    </PlantListFlex>
  );
};

export default PlantList;
