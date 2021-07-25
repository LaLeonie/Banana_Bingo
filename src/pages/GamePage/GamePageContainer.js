import React from 'react';
import RouteButton from '../../common/containers/RouteButton';

const GamePageContainer = () => {
  return (
    <div>
      <h1>Game Page</h1>
      <RouteButton route="followup">I'm Done</RouteButton>
      <RouteButton route="">Go Home</RouteButton>
      <RouteButton route="info">How to Play</RouteButton>
    </div>
  );
};

export default GamePageContainer;
