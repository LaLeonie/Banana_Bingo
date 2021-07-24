import React from 'react';
import { RouteButton } from '../../common/components';

const GamePageContainer = () => {
  return (
    <div>
      <h1>Game Page</h1>
      <RouteButton>I'm Done</RouteButton>
      <RouteButton route="">Go Home</RouteButton>
    </div>
  );
};

export default GamePageContainer;
