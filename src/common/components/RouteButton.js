import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const RouteButton = ({ route, back, children }) => {
  const history = useHistory();

  function handleBack() {
    history.goBack();
  }
  function handleClick() {
    history.push(`/${route}`);
  }

  return <Button onClick={back ? handleBack : handleClick}>{children}</Button>;
};

export default RouteButton;
