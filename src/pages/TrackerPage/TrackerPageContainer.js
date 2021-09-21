import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';

import {
  removeSelectedPlant,
  addSelectedPlants,
  addExtraScore,
  subtractExtraScore,
  getToday,
} from '../../store/user';
import { useFetch } from '../../hooks';
import { filterColors } from '../../utils';

import { Body, Footer, PageTitle, SubTitle } from '../../common/components';
import ColorFilter from './components/ColorFilter';
import NavBar from '../../common/containers/NavBar';
import PlantList from '../../common/components/PlantList';
import { BasicButton } from '../../common/components';
import TypeSelector from './components/TypeSelector';

const TrackerWrapper = styled.div`
  height: 100%;

  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

const SideBar = styled.div`
  backdrop-filter: blur(8px);
  background: rgba(244, 250, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: start;

  -webkit-backdrop-filter: blur(8px);
  overflow: scroll;
  padding: 60px 20px;
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
  const history = useHistory();
  const dispatch = useDispatch();

  let [allPlants, setAllPlants] = useState([]);
  let [colors, setColors] = useState([]);
  let [color, setColor] = useState('');
  let [fruitCheck, setFruitCheck] = useState(true);
  let [vegCheck, setVegCheck] = useState(true);

  const getFilteredPlants = (plants, color, fruit, veg) => {
    let displayPlants = plants.filter(
      (obj) => dailyPlants.findIndex((el) => el.id === obj.id) === -1
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
      dispatch(removeSelectedPlant(plantName));
      dispatch(subtractExtraScore(1));
    }

    if (!node.classList.contains('item--selected')) {
      let plantObject = allPlants.find((obj) => obj.fields.Name === plantName);

      if (!dailyPlants.find((obj) => obj.fields.Name === plantName)) {
        dispatch(addSelectedPlants([plantObject]));
        dispatch(addExtraScore(1));
      }
    }
  };

  const endTracking = () => {
    history.push('/result');
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
        <PageTitle>Let's Add More Plants</PageTitle>
        <TrackerWrapper>
          <MainContent>
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
            <SubTitle>Your Plant List</SubTitle>
            <PlantList
              handlePlanItemClick={handlePlanItemClick}
              selected
              selectable
              narrow
              plants={dailyPlants}
            />
          </SideBar>
        </TrackerWrapper>
      </Body>
      <Footer>
        <BasicButton primary onClick={endTracking}>
          I'm Done
        </BasicButton>
      </Footer>
    </>
  );
};

export default TrackerPageContainer;
