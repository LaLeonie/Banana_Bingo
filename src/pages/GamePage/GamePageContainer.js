import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addInitialScore, addVictory, getToday } from '../../store/user';
import { changePlants } from '../../store/game';
import { changeGameStatus } from '../../store/game';
import { bingoLogic } from '../../utils';
import { getPlayedToday } from '../../store/game';

import { Body, Footer } from '../../common/components';
import GameBoard from './components/GameBoard';
import NavBar from '../../common/containers/NavBar';
import ResultAlert from './components/ResultAlert';
import RouteButton from '../../common/containers/RouteButton';

const GamePageContainer = ({ isLoading, serverError, apiData }) => {
  const dispatch = useDispatch();
  const today = useSelector(getToday);

  const selectedPlants = today.dailyPlants;
  const [randomApiData, setRandomApiData] = useState(null);
  const [playedToday, setPlayedToday] = useState(useSelector(getPlayedToday));

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
        dispatch(addInitialScore(10));
        changeGameStatus(true);
        setPlayedToday(true);
      }
    }
  }, [selectedPlants]);

  return (
    <>
      <NavBar full gameStatus={playedToday} />
      <Body>
        {playedToday && <ResultAlert />}
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
