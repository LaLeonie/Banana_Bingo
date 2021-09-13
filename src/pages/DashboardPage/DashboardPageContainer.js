import React from 'react';

import { Body, PageTitle } from '../../common/components';
import NavBar from '../../common/containers/NavBar';

const DashboardPageContainer = () => {
  return (
    <>
      <NavBar />
      <Body>
        <PageTitle>Dashboard Page</PageTitle>
      </Body>
    </>
  );
};

export default DashboardPageContainer;
