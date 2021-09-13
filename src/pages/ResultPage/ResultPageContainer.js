import React from 'react';
import { useSelector } from 'react-redux';
import { scoreCalculator } from '../../utils';
import { getToday } from '../../store/user';

import RouteButton from '../../common/containers/RouteButton';
import { Body, Footer, PageTitle } from '../../common/components';
import NavBar from './../../common/containers/NavBar';

const ResultPageContainer = () => {
  const { initialScore, extraScore } = useSelector(getToday);
  let scoreSum = scoreCalculator({ initialScore, extraScore });

  return (
    <>
      <NavBar score gameStatus="true" />
      <Body>
        <PageTitle>Well Done!</PageTitle>
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
