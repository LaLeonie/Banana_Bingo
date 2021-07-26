import React from 'react';
import RouteButton from './../../common/containers/RouteButton';
import { Body } from '../../common/components';
import NavBar from '../../common/containers/NavBar';

const DashboardPageContainer = () => {
  return (
    <>
      <NavBar />
      <Body>
        <h1>Dashboard Page</h1>
      </Body>
    </>
  );
};

export default DashboardPageContainer;
