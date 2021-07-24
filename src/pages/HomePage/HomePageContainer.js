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
          <RouteButton route="game" desc="Play" />
          <RouteButton route="info" desc="How to Play?" />
          <RouteButton route="dahsboard" desc="Stats" />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePageContainer;
