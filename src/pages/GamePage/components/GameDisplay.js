import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { changePlants } from '../../../store/game';
import { useFetch, useRandom } from '../../../hooks';

import GameBoard from './GameBoard';

const GameDisplayContainer = styled.div`
  min-height: 550px;
  margin: auto;
`;

const GameDisplay = ({ selection, setSelection }) => {
  const dispatch = useDispatch();

  //get data from API
  const { isLoading, serverError, apiData } = useFetch('');

  //select 25 random plants from API data
  const randomApiData = useRandom(apiData);

  //update Redux store
  useEffect(() => {
    dispatch(changePlants(randomApiData));
  }, [randomApiData]);

  return (
    <GameDisplayContainer>
      {isLoading && <span>Loading ... </span>}
      {!isLoading && serverError && <span>Error in Fetching data ... </span>}
      {!isLoading && randomApiData && (
        <GameBoard
          randomApiData={randomApiData}
          selection={selection}
          setSelection={setSelection}
        />
      )}
    </GameDisplayContainer>
  );
};

export default GameDisplay;
