import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  addInitialScore,
  addVictory,
  addSelectedPlans,
} from '../../store/user';
import { changeGameStatus, getPlayedToday } from '../../store/game';
import { bingoLogic } from '../../utils';

import { Body, Footer } from '../../common/components';
import { LinkButton } from '../../common/components/Buttons';
import CountDown from './components/CountDown';
import GameDisplay from './components/GameDisplay';
import NavBar from '../../common/containers/NavBar';
import ResultAlert from './components/ResultAlert';
import RouteButton from '../../common/containers/RouteButton';
import Timer from './components/Timer';

const GamePageContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [countdownDisplay, setCountdownDisplay] = useState(true);
  const [timerDisplay, setTimerdisplay] = useState(true);
  const [playedToday, setPlayedToday] = useState(useSelector(getPlayedToday));
  const [selection, setSelection] = useState([]);

  const gamePlayedToday = useSelector(getPlayedToday);

  const endGame = () => {
    history.push('/followup');
    dispatch(changeGameStatus(true));
    dispatch(addSelectedPlans(selection));
  };

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
  }, [selection]);

  return (
    <>
      <NavBar full gameStatus={playedToday} />
      <Body>
        {gamePlayedToday ? (
          <>
            <p>You have played already today</p>
            <RouteButton route="dashboard" actionCreator={changeGameStatus}>
              Check out dashboard
            </RouteButton>
          </>
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
            <GameDisplay selection={selection} setSelection={setSelection} />
          </>
        )}
      </Body>
      <Footer>
        <LinkButton onClick={endGame}>I'm Done</LinkButton>
      </Footer>
    </>
  );
};

export default GamePageContainer;
