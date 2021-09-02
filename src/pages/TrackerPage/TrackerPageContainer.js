import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { getToday } from '../../store/user';
import { useFetch } from '../../hooks';
import { filterColors } from '../../utils';

import { Body, Footer } from '../../common/components';
import ColorFilter from './components/ColorFilter';
import NavBar from '../../common/containers/NavBar';
import PlantList from '../../common/components/PlantList';
import RouteButton from '../../common/containers/RouteButton';
import TypeSelector from './components/TypeSelector';

const TrackerWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

const SideBar = styled.div`
  flex-grow: 1;
  border: green solid 2px;
  border-radius: 8px;
  background-color: lightgreen;

  .list {
    max-width: 300px;
    margin: auto;
  }
`;

const MainContent = styled.div`
  flex-basis: 0;
  flex-grow: 999;
  min-width: 50%;
`;

const FilterPanel = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
`;

const getFilteredPlants = (plants, color, fruit, veg) =>
  plants.filter(
    (el) =>
      el.fields.Color === color &&
      ((fruit && el.fields.Type === 'Fruit') ||
        (veg && el.fields.Type === 'Veg'))
  );

const TrackerPageContainer = () => {
  let [allPlants, setAllPlants] = useState([]);
  let [colors, setColors] = useState([]);
  let [color, setColor] = useState('');
  let [fruitCheck, setFruitCheck] = useState(true);
  let [vegCheck, setVegCheck] = useState(true);
  const { dailyPlants } = useSelector(getToday);
  const { apiData } = useFetch('');

  const handlePlanItemClick = (e) => {
    console.log(e);
  };

  useEffect(() => {
    if (apiData) {
      setAllPlants(apiData.records);
      setColors(filterColors(apiData.records));
    }
  }, [apiData]);

  return (
    <>
      <NavBar score gameStatus="true" />
      <Body>
        <TrackerWrapper>
          <MainContent>
            <h1>Tell me what other fruit you had</h1>
            <FilterPanel>
              <ColorFilter setColor={setColor} colors={colors} />
              <TypeSelector
                setFruitCheck={setFruitCheck}
                setVegCheck={setVegCheck}
                vegCheck={vegCheck}
                fruitCheck={fruitCheck}
              />
            </FilterPanel>
            <PlantList
              handlePlanItemClick={handlePlanItemClick}
              displayName
              plants={getFilteredPlants(allPlants, color, fruitCheck, vegCheck)}
            />
          </MainContent>
          <SideBar>
            <h2>Your Plant List</h2>
            <div className="list">
              <PlantList
                handlePlanItemClick={handlePlanItemClick}
                displayName
                plants={dailyPlants}
              />
            </div>
          </SideBar>
        </TrackerWrapper>
      </Body>
      <Footer>
        <RouteButton route="result">I'm Done</RouteButton>
      </Footer>
    </>
  );
};

export default TrackerPageContainer;
