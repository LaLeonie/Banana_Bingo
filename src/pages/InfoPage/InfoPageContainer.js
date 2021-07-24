import React from 'react';
import Button from 'react-bootstrap/Button';

import { useHistory } from 'react-router-dom';

const InfoPageContainer = () => {
  const history = useHistory();
  function handleBackClick() {
    history.goBack();
  }
  return (
    <div>
      <h1>Info Page</h1>
      <Button onClick={handleBackClick}>Go Back</Button>
    </div>
  );
};

export default InfoPageContainer;
