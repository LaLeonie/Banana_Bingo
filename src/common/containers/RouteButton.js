import React from 'react';
import { BasicButton } from '../components';
import { useHistory } from 'react-router-dom';

const RouteButton = ({ isPrimary, route, back, children }) => {
  const history = useHistory();

  function handleBack() {
    history.goBack();
  }

  function handleClick() {
    history.push(`/${route}`);
  }

  return (
    <BasicButton primary={isPrimary} onClick={back ? handleBack : handleClick}>
      {children}
    </BasicButton>
  );
};

export default RouteButton;
