import React from 'react';
import { LinkButton } from '../components/Buttons';
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
    <LinkButton onClick={back ? handleBack : handleClick}>
      {children}
    </LinkButton>
  );
};

export default RouteButton;
