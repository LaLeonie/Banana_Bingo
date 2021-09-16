import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  addInitialScore,
  addVictory,
  addSelectedPlants,
} from '../../store/user';
import {
  changeGameStatus,
  changePlants,
  getPlayedToday,
  getApiPlants,
  getDifficulty,
} from '../../store/game';
import { bingoLogic } from '../../utils';
import { positionCalculator } from '../../utils';
import { useFetch, useRandom, useFilter } from '../../hooks';

import { Body, Footer } from '../../common/components';
import { BasicButton } from '../../common/components';
import CountDown from './components/CountDown';
import GameDisplay from './components/GameDisplay';
import MessageDisplay from './components/MessageDisplay';
import NavBar from '../../common/containers/NavBar';
import ResultAlert from './components/ResultAlert';
import Timer from './components/Timer';

const GamePageContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [countdownDisplay, setCountdownDisplay] = useState(true);
  const [timerDisplay, setTimerdisplay] = useState(true);
  const [playedToday, setPlayedToday] = useState(useSelector(getPlayedToday));
  const [selection, setSelection] = useState([]);

  const gamePlayedToday = useSelector(getPlayedToday);
  const displayedPlants = useSelector(getApiPlants);

  const handleItemClick = (e) => {
    const plantName = e.target.alt;
    if (plantName) {
      if (e.target.classList.contains('selected')) {
        setSelection(
          selection.filter((plant) => plant.fields.Name !== plantName)
        );
        e.target.classList.remove('selected');
      } else {
        const index = e.target.parentNode.id;
        const selectedPlant = displayedPlants.find(
          (plant) => plant.fields.Name === plantName
        );
        selectedPlant.position = positionCalculator(index);
        setSelection([...selection, selectedPlant]);
        e.target.classList.toggle('selected');
      }
    }
  };

  const endGame = () => {
    history.push('/followup');
    dispatch(changeGameStatus(true));
    dispatch(addSelectedPlants(selection));
  };

  //get data from API
  const { isLoading, serverError, apiData } = useFetch('');

  //filter according to difficulty level
  const filteredData = useFilter(apiData, useSelector(getDifficulty));

  //select 25 random plants
  const randomApiData = useRandom(filteredData);

  //update Redux store
  useEffect(() => {
    dispatch(changePlants(randomApiData));
  }, [dispatch, randomApiData]);

  //check for bingo every time selection changes when selection >=5
  useEffect(() => {
    if (selection.length >= 5) {
      const positions = selection.map((el) => el.position);
      if (bingoLogic(positions)) {
        dispatch(addVictory());
        dispatch(addInitialScore(10));
        setPlayedToday(true);
        setTimerdisplay(false);
      }
    }
  }, [selection, dispatch]);

  return (
    <>
      <NavBar full gameStatus={playedToday} />
      <Body>
        {gamePlayedToday ? (
          <MessageDisplay />
        ) : (
          <>
            {countdownDisplay ? (
              <CountDown setCountdownDisplay={setCountdownDisplay} />
            ) : (
              timerDisplay && (
                <Timer
                  setTimerdisplay={setTimerdisplay}
                  setPlayedToday={setPlayedToday}
                />
              )
            )}
            {playedToday && <ResultAlert endGame={endGame} />}
            <GameDisplay
              isLoading={isLoading}
              serverError={serverError}
              randomApiData={randomApiData}
              selection={selection}
              setSelection={setSelection}
              handleItemClick={handleItemClick}
            />
          </>
        )}
      </Body>
      <Footer>
        <BasicButton primary onClick={endGame}>
          I'm Done
        </BasicButton>
      </Footer>
    </>
  );
};

export default GamePageContainer;
