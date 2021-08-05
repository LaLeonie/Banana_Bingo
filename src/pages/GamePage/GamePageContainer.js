import React, { useState, useEffect } from 'react';
import { changePlants } from '../../store/game';
import { changeGameStatus } from '../../store/game';
import { useDispatch, useSelector } from 'react-redux';
import RouteButton from '../../common/containers/RouteButton';
import GameBoard from './components/GameBoard';
import { Body, Footer } from '../../common/components';
import NavBar from '../../common/containers/NavBar';
import { getToday, addVictory } from '../../store/user';
import { bingoLogic } from '../../utils';

const GamePageContainer = ({ isLoading, serverError, apiData }) => {
  const dispatch = useDispatch();
  const today = useSelector(getToday);
  const selectedPlants = today.dailyPlants;
  const [randomApiData, setRandomApiData] = useState(null);

  useEffect(() => {
    if (apiData) {
      setRandomApiData(
        apiData.records.sort(() => 0.5 - Math.random()).slice(0, 25)
      );
    }
  }, [apiData]);

  useEffect(() => {
    dispatch(changePlants(randomApiData));
  }, [randomApiData]);

  useEffect(() => {
    if (selectedPlants.length >= 5) {
      const positions = selectedPlants.map((el) => el.position);
      if (bingoLogic(positions)) {
        dispatch(addVictory());
      }
    }
  }, [selectedPlants]);

  return (
    <>
      <NavBar full />
      <Body>
        {isLoading && <span>Loading ... </span>}
        {!isLoading && serverError && <span>Error in Fetching data ... </span>}
        {!isLoading && randomApiData && <GameBoard plants={randomApiData} />}
      </Body>
      <Footer>
        <RouteButton route="followup" actionCreator={changeGameStatus}>
          I'm Done
        </RouteButton>
      </Footer>
    </>
  );
};

export default GamePageContainer;
