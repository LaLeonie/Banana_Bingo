import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import { Layout } from './../../common/components';
import { RouteButton } from './../../common/components';

const HomePageContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={8}></Col>
        <Col>
          <RouteButton route="dashboard">Stats</RouteButton>
        </Col>
        <Col>
          <RouteButton route="info">?</RouteButton>
        </Col>
      </Row>
      <Row className="row">
        <Col xs={12}>
          <h1>Banana Bingo</h1>
          <RouteButton route="game">Play</RouteButton>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePageContainer;
