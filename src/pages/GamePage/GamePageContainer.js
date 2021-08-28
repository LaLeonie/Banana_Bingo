import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { addInitialScore, addVictory, getToday } from '../../store/user';
import { changePlants } from '../../store/game';
import { changeGameStatus } from '../../store/game';
import { bingoLogic } from '../../utils';
import { getPlayedToday } from '../../store/game';

import { Body, Footer } from '../../common/components';
import CountDown from './components/CountDown';
import GameBoard from './components/GameBoard';
import NavBar from '../../common/containers/NavBar';
import ResultAlert from './components/ResultAlert';
import RouteButton from '../../common/containers/RouteButton';
import Timer from './components/Timer';
import { useFetch, useRandom } from '../../hooks/index';

const GameDisplay = styled.div`
  min-height: 550px;
  margin: auto;
`;

const GamePageContainer = () => {
  const [countdownDisplay, setCountdownDisplay] = useState(true);
  const [timerDisplay, setTimerdisplay] = useState(true);
  const dispatch = useDispatch();
  const today = useSelector(getToday);

  //get data from API
  const { isLoading, serverError, apiData } = useFetch('');

  //select 25 random plants from APII data
  const randomApiData = useRandom(apiData);

  const selectedPlants = today.dailyPlants;
  const [playedToday, setPlayedToday] = useState(useSelector(getPlayedToday));

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
        {countdownDisplay ? (
          <CountDown setCountdownDisplay={setCountdownDisplay} />
        ) : (
          timerDisplay && <Timer setTimerdisplay={setTimerdisplay} />
        )}
        {playedToday && <ResultAlert />}
        <GameDisplay>
          {isLoading && <span>Loading ... </span>}
          {!isLoading && serverError && (
            <span>Error in Fetching data ... </span>
          )}
          {!isLoading && randomApiData && <GameBoard plants={randomApiData} />}
        </GameDisplay>
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
