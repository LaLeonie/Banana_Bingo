import React from 'react';
import { BasicButton, IconButton } from '../components';
import { useHistory } from 'react-router-dom';

const RouteButton = ({ isIcon, isPrimary, route, back, children }) => {
  const history = useHistory();

  function handleBack() {
    history.goBack();
  }

  function handleClick() {
    history.push(`/${route}`);
  }

  if (isIcon) {
    return (
      <IconButton primary={isPrimary} onClick={back ? handleBack : handleClick}>
        {children}
      </IconButton>
    );
  }

  return (
    <BasicButton primary={isPrimary} onClick={back ? handleBack : handleClick}>
      {children}
    </BasicButton>
  );
};

export default RouteButton;
