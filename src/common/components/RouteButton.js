import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const RouteButton = ({ route, desc }) => {
  const history = useHistory();
  function handleClick() {
    history.push(`/${route}`);
  }

  return <Button onClick={handleClick}>{desc}</Button>;
};

export default RouteButton;
