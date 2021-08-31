import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { getToday } from '../../store/user';
import { useFetch } from '../../hooks';

import { Body, Footer } from '../../common/components';
import NavBar from '../../common/containers/NavBar';
import PlantList from '../../common/components/PlantList';
import RouteButton from '../../common/containers/RouteButton';

const TrackerWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  border: solid black 2px;
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
  const { dailyPlants } = useSelector(getToday);
  const { apiData } = useFetch('');

  useEffect(() => {
    setAllPlants(apiData);
    console.log(allPlants);
  }, [apiData]);

  return (
    <>
      <NavBar score gameStatus="true" />
      <Body>
        <TrackerWrapper>
          <MainContent>
            <h1>More Plants for you</h1>
            <p>Tell me what other fruit you had</p>
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
