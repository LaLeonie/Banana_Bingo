import React from 'react';
import { LinkButton } from '../components/Buttons';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const RouteButton = ({ route, back, children, dispatchType }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  function handleBack() {
    history.goBack();
  }

  function handleClick() {
    history.push(`/${route}`);
    if (dispatchType) {
      dispatch({ type: `${dispatchType}` });
    }
  }

  return (
    <LinkButton onClick={back ? handleBack : handleClick}>
      {children}
    </LinkButton>
  );
};

export default RouteButton;
