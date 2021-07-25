import React from 'react';
import { BasicTitle, Body, NavBar } from './../../common/components';
import RouteButton from './../../common/containers/RouteButton';

const HomePageContainer = () => {
  return (
    <>
      <NavBar>
        <RouteButton route="dashboard">Stats</RouteButton>
        <RouteButton route="info">?</RouteButton>
      </NavBar>
      <Body>
        <BasicTitle main>Banana Bingo</BasicTitle>
        <RouteButton route="game">Play</RouteButton>
      </Body>
    </>
  );
};

export default HomePageContainer;
