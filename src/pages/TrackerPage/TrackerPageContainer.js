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

const TrackerPageContainer = () => {
  const { dailyPlants } = useSelector(getToday);
  const { apiData } = useFetch('');

  let [allPlants, setAllPlants] = useState([]);
  let [colors, setColors] = useState([]);
  let [selectedPlants, setSelectedPlants] = useState(dailyPlants);
  let [color, setColor] = useState('');
  let [fruitCheck, setFruitCheck] = useState(true);
  let [vegCheck, setVegCheck] = useState(true);

  const getFilteredPlants = (plants, color, fruit, veg) => {
    let displayPlants = plants.filter(
      (obj) => selectedPlants.findIndex((el) => el.id === obj.id) === -1
    );

    return displayPlants.filter(
      (el) =>
        el.fields.Color === color &&
        ((fruit && el.fields.Type === 'Fruit') ||
          (veg && el.fields.Type === 'Veg'))
    );
  };

  const handlePlanItemClick = (e) => {
    let node = e.target.parentNode;
    let plantName;
    if (e.target.nodeName === 'LI') {
      node = e.target;
    }

    plantName = node.getAttribute('name');

    if (node.classList.contains('item--selected')) {
      setSelectedPlants(
        selectedPlants.filter((obj) => obj.fields.Name !== plantName)
      );
    }

    if (!node.classList.contains('item--selected')) {
      let plantObject = allPlants.find((obj) => obj.fields.Name === plantName);
      if (!selectedPlants.find((obj) => obj.fields.Name === plantName)) {
        setSelectedPlants([...selectedPlants, plantObject]);
      }
    }
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
              selectable
              plants={getFilteredPlants(allPlants, color, fruitCheck, vegCheck)}
            />
          </MainContent>
          <SideBar>
            <h2>Your Plant List</h2>
            <div className="list">
              <PlantList
                handlePlanItemClick={handlePlanItemClick}
                displayName
                selected
                selectable
                plants={selectedPlants}
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
