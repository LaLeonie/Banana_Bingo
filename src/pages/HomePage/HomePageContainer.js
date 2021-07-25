import React from 'react';
import { BasicTitle, Body, Header } from './../../common/components';
import RouteButton from './../../common/containers/RouteButton';

const HomePageContainer = () => {
  return (
    <>
      <Header>
        <RouteButton route="dashboard">Stats</RouteButton>
        <RouteButton route="info">?</RouteButton>
      </Header>
      <Body>
        <BasicTitle main>Banana Bingo</BasicTitle>
        <RouteButton route="game">Play</RouteButton>
      </Body>
    </>
  );
};

export default HomePageContainer;
