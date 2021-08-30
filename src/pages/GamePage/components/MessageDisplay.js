import React from 'react';
import RouteButton from '../../../common/containers/RouteButton';

const MessageDisplay = () => {
  return (
    <>
      <h1>Tomorrow is another day</h1>
      <p>
        You have played already today. Come back tomorrow for another round of
        Banana Bingo.
      </p>
      <RouteButton route="dashboard">View dashboard</RouteButton>
    </>
  );
};

export default MessageDisplay;
