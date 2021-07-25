import React from 'react';
import { Header, Logo } from '../components';
import RouteButton from './RouteButton';

const NavBar = ({ score }) => {
  return (
    <Header full>
      <div>
        <RouteButton route="">Go Home</RouteButton>
        <RouteButton back>Go Back</RouteButton>
      </div>

      <Logo />
      {score ? (
        <div>score</div>
      ) : (
        <RouteButton route="info">How to Play</RouteButton>
      )}
    </Header>
  );
};

export default NavBar;
