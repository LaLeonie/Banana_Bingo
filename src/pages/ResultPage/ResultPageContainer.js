import React from 'react';

import { RouteButton } from '../../common/components';

const ResultPageContainer = () => {
  return (
    <div>
      <h1>Result Page</h1>
      <RouteButton route="">Go Home</RouteButton>
      <RouteButton route="dashboard">View Dashboard</RouteButton>
    </div>
  );
};

export default ResultPageContainer;
