import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import RouteButton from '../../common/containers/RouteButton';
import GameBoard from './components/GameBoard';
import { Body, Footer } from '../../common/components';
import NavBar from '../../common/containers/NavBar';

const GamePageContainer = () => {
  const { isLoading, serverError, apiData } = useFetch();
  return (
    <>
      <NavBar full />
      <Body>
        <GameBoard />
        {isLoading && <span>Loading ... </span>}
        {!isLoading && serverError ? (
          <span>Error in Fetching data ... </span>
        ) : (
          <span>{JSON.stringify(apiData)}</span>
        )}
      </Body>
      <Footer>
        <RouteButton route="followup">I'm Done</RouteButton>
      </Footer>
    </>
  );
};

export default GamePageContainer;
