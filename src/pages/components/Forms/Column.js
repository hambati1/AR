import React from 'react';
import {Col, Form, Row} from 'react-bootstrap';

const Column = () => {
  return (
    <div>
      <Form>
        <Row>
          <Col xs={7}>
            <Form.Control placeholder='City' />
          </Col>
          <Col>
            <Form.Control placeholder='State' />
          </Col>
          <Col>
            <Form.Control placeholder='Zip' />
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Column;
