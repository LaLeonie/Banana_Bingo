import React from 'react';
import RouteButton from '../../common/containers/RouteButton';
import { Body, Footer } from '../../common/components';
import NavBar from '../../common/containers/NavBar';

import { Form, Col, Row, Button } from 'react-bootstrap';

const TrackerPageContainer = () => {
  return (
    <>
      <NavBar score />
      <Body flex>
        <div>
          <h1>More Plants for you</h1>
          <p>Tell me what other fruit you had</p>
          <Form>
            <Row className="align-items-center">
              <Col xs="auto">
                <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                  Plant
                </Form.Label>
                <Form.Control id="inlineFormInput" placeholder="Add plant" />
              </Col>
              <Col xs="auto">
                <Button type="submit">Add</Button>
              </Col>
            </Row>
          </Form>
        </div>
        <div>List of plants</div>
      </Body>
      <Footer>
        <RouteButton route="result">I'm Done</RouteButton>
      </Footer>
    </>
  );
};

export default TrackerPageContainer;
