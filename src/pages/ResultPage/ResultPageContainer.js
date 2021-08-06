import React from 'react';
import { useSelector } from 'react-redux';

import RouteButton from '../../common/containers/RouteButton';
import { Body, Footer } from '../../common/components';
import NavBar from './../../common/containers/NavBar';
import { scoreCalculator } from '../../utils';
import { getToday } from '../../store/user';

const ResultPageContainer = () => {
  const { initialScore, extraScore } = useSelector(getToday);
  let scoreSum = scoreCalculator({ initialScore, extraScore });

  return (
    <>
      <NavBar score gameStatus="true" />
      <Body>
        <h1>Well Done!</h1>
        <p>Today you gained {scoreSum} stars. </p>
        <p>Come back tomorrow for another round of Banana Bingo. </p>
      </Body>
      <Footer>
        <RouteButton route="dashboard">View Dashboard</RouteButton>
      </Footer>
    </>
  );
};

export default ResultPageContainer;
