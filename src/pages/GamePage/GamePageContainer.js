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
    if (apiData) {
      console.log({ apiData });
      setRandomApiData(
        apiData.records.sort(() => 0.5 - Math.random()).slice(0, 25)
      );
    }
    console.log(randomApiData);
  }, [apiData]);

  return (
    <>
      <NavBar full />
      <Body>
        {isLoading && <span>Loading ... </span>}
        {!isLoading && serverError ? (
          <span>Error in Fetching data ... </span>
        ) : (
          <div>"the game is on"</div>
        )}
        {randomApiData && <GameBoard plants={randomApiData} />}
      </Body>
      <Footer>
        <RouteButton route="followup">I'm Done</RouteButton>
      </Footer>
    </>
  );
};

export default GamePageContainer;
