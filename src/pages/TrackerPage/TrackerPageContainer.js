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

const TrackerPageContainer = () => {
  let [allPlants, setAllPlants] = useState();
  let [filteredPlants, setFilteredPlants] = useState([]);
  let [colors, setColors] = useState([]);
  const { dailyPlants } = useSelector(getToday);
  const { apiData } = useFetch('');

  const filterPlantsByColor = (color) => {
    console.log(allPlants);
    setFilteredPlants(
      allPlants.records.filter((el) => el.fields.Color === color)
    );
  };

  useEffect(() => {
    setAllPlants(apiData);
    if (apiData) {
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
            <ColorFilter
              filterPlantsByColor={filterPlantsByColor}
              colors={colors}
            />
            <TypeSelector />
            <PlantList displayName plants={filteredPlants} />
          </MainContent>
          <SideBar>
            <h2>Your Plant List</h2>
            <div className="list">
              <PlantList displayName plants={dailyPlants} />
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
