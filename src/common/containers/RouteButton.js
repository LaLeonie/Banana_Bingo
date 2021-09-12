import React from 'react';
import { PrimaryButton } from '../components';
import { useHistory } from 'react-router-dom';

const RouteButton = ({ route, back, children }) => {
  const history = useHistory();

  function handleBack() {
    history.goBack();
  }

  function handleClick() {
    history.push(`/${route}`);
  }

  return (
    <PrimaryButton onClick={back ? handleBack : handleClick}>
      {children}
    </PrimaryButton>
  );
};

export default RouteButton;
