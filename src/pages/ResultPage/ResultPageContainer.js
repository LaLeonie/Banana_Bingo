import React from 'react';
import { useSelector } from 'react-redux';

import RouteButton from '../../common/containers/RouteButton';

import { Body, Footer } from '../../common/components';
import NavBar from './../../common/containers/NavBar';
import { scoreCalculator } from '../../utils';

const ResultPageContainer = () => {
  const dayScore = useSelector((state) => state.userData.today.dayScore);
  let scoreSum = scoreCalculator(dayScore);

  return (
    <>
      <NavBar score />
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
