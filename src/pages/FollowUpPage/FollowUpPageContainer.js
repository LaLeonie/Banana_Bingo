import React from 'react';
import RouteButton from './../../common/containers/RouteButton';

const FollowUpPageContainer = () => {
  return (
    <div>
      <h1>Follow Up Page</h1>
      <RouteButton route="">Go Home</RouteButton>
      <RouteButton back>Go Back</RouteButton>
      <p>Have you eaten any more plants today?</p>
      <RouteButton route="tracker">Yes, I had more</RouteButton>
      <RouteButton route="result">No, that's all I've eaten</RouteButton>
    </div>
  );
};

export default FollowUpPageContainer;
