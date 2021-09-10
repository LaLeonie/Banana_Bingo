import React from 'react';
import { BasicTitle, Body, Header } from './../../common/components';
import RouteButton from './../../common/containers/RouteButton';
import { SecondaryButton } from '../../common/components';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  gap: 4px;
`;

const HomePageContainer = () => {
  return (
    <>
      <Header>
        <RouteButton route="dashboard">Stats</RouteButton>
        <RouteButton route="info">?</RouteButton>
      </Header>
      <Body>
        <BasicTitle main>Banana Bingo</BasicTitle>
        <ButtonContainer>
          <SecondaryButton>Settings</SecondaryButton>
          <RouteButton route="game">Play</RouteButton>
        </ButtonContainer>
      </Body>
    </>
  );
};

export default HomePageContainer;
