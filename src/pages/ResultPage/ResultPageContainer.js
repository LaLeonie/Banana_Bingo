import React from 'react';

import RouteButton from '../../common/containers/RouteButton';

import { Body, Footer } from '../../common/components';
import NavBar from './../../common/containers/NavBar';

const ResultPageContainer = () => {
  return (
    <>
      <NavBar score />
      <Body>
        <h1>Well Done!</h1>
        <p>Today you gained x amounts of stars. </p>
      </Body>
      <Footer>
        <RouteButton route="dashboard">View Dashboard</RouteButton>
      </Footer>
    </>
  );
};

export default ResultPageContainer;
