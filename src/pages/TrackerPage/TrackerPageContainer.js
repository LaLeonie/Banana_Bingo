import React from 'react';
import { RouteButton } from '../../common/components';

const TrackerPageContainer = () => {
  return (
    <div>
      <h1>Tracker Page</h1>
      <RouteButton route="result">I'm Done</RouteButton>
      <RouteButton route="">Go Home</RouteButton>
    </div>
  );
};

export default TrackerPageContainer;
