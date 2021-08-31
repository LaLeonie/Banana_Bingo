import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getToday } from '../../store/user';
import { useFetch } from '../../hooks';

import { Body, Footer } from '../../common/components';
import NavBar from '../../common/containers/NavBar';
import PlantList from '../../common/components/PlantList';
import RouteButton from '../../common/containers/RouteButton';

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
      <Body flex>
        <div>
          <h1>More Plants for you</h1>
          <p>Tell me what other fruit you had</p>
        </div>
        <PlantList plants={dailyPlants} />
      </Body>
      <Footer>
        <RouteButton route="result">I'm Done</RouteButton>
      </Footer>
    </>
  );
};

export default TrackerPageContainer;
