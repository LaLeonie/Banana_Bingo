import React, { useState, useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import RouteButton from '../../common/containers/RouteButton';
import GameBoard from './components/GameBoard';
import { Body, Footer } from '../../common/components';
import NavBar from '../../common/containers/NavBar';

const GamePageContainer = () => {
  const { isLoading, serverError, apiData } = useFetch('');
  const [randomApiData, setRandomApiData] = useState(null);

  useEffect(() => {
    if (isLoading) {
      setRandomApiData(
        apiData.records.sort(() => 0.5 - Math.random()).slice(0, 9)
      );
    }
    console.log(randomApiData);
  }, [isLoading]);

  return (
    <>
      <NavBar full />
      <Body>
        <GameBoard />
        {isLoading && <span>Loading ... </span>}
        {!isLoading && serverError ? (
          <span>Error in Fetching data ... </span>
        ) : (
          <span>{JSON.stringify(randomApiData)}</span>
        )}
      </Body>
      <Footer>
        <RouteButton route="followup">I'm Done</RouteButton>
      </Footer>
    </>
  );
};

export default GamePageContainer;
