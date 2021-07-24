import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { RouteButton } from './../../common/components';

const HomePageContainer = () => {
  return (
    <Container>
      <Row className="row">
        <Col xs={12}>
          <h1>Banana Bingo</h1>
          <RouteButton route="game">Play</RouteButton>
          <RouteButton route="info">How to Play</RouteButton>
          <RouteButton route="dashboard">Stats</RouteButton>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePageContainer;
