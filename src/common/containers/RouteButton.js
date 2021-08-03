import React from 'react';
import { LinkButton } from '../components/Buttons';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const RouteButton = ({ route, back, children, actionCreator }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  function handleBack() {
    history.goBack();
  }

  function handleClick() {
    history.push(`/${route}`);
    if (actionCreator) {
      dispatch(actionCreator());
    }
  }

  return (
    <LinkButton onClick={back ? handleBack : handleClick}>
      {children}
    </LinkButton>
  );
};

export default RouteButton;
