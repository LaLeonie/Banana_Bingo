import React from 'react';
import RouteButton from './../../common/containers/RouteButton';
import { Footer, Body } from '../../common/components';
import NavBar from '../../common/containers/NavBar';

const FollowUpPageContainer = () => {
  return (
    <>
      <NavBar />
      <Body>
        <h2>Well, Done</h2>
        <p></p>You get a star for every plant you have eaten today.
        <p>Have you eaten any more plants?</p>
      </Body>
      <Footer centered>
        <RouteButton route="tracker">Yes, I had more</RouteButton>
        <RouteButton route="result">No, that's all I've eaten</RouteButton>
      </Footer>
    </>
  );
};

export default FollowUpPageContainer;
