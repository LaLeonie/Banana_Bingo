import React from 'react';
import { BasicButton } from '../components';
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
    <BasicButton primary onClick={back ? handleBack : handleClick}>
      {children}
    </BasicButton>
  );
};

export default RouteButton;
