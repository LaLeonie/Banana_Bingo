import React from 'react';
import { BasicTitle } from './../../common/components';
import { RouteButton } from './../../common/components';

const HomePageContainer = () => {
  return (
    <>
      <div>
        <RouteButton route="dashboard">Stats</RouteButton>
        <RouteButton route="info">?</RouteButton>
      </div>

      <BasicTitle main>Banana Bingo</BasicTitle>
      <RouteButton route="game">Play</RouteButton>
    </>
  );
};

export default HomePageContainer;
