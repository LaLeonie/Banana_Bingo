import React from 'react';
import styled from 'styled-components';
import testImage from './../../logo.svg'; //test image

import { useSelector } from 'react-redux';
import { PlantItem } from '../components';
import { getToday } from '../../store/user';

const PlantListFlex = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
`;

const PlantList = () => {
  const today = useSelector(getToday);

  return (
    <PlantListFlex>
      {today.dailyPlants.map((el) => (
        <PlantItem
          key={el.name}
          name={el.name}
          amount={el.amount}
          image={testImage}
        />
      ))}
    </PlantListFlex>
  );
};

export default PlantList;
