import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const HomePageContainer = () => {
  return (
    <Container>
      <Row className="row">
        <Col xs={12}>
          <h1>Banana Bingo</h1>
          <Button>Let's Play!</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePageContainer;
