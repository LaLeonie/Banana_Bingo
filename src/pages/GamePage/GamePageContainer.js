import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const GamePageContainer = () => {
  const history = useHistory();
  function handleDoneClick() {
    history.push('/result');
  }

  function handleHomeClick() {
    history.push('/');
  }
  return (
    <div>
      <h1>Game Page</h1>
      <Button onClick={handleDoneClick}>I'm Done</Button>
      <Button onClick={handleHomeClick}>Go Home</Button>
    </div>
  );
};

export default GamePageContainer;
