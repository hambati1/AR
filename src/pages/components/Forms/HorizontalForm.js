import React from 'react';
import {Col, Row, Form} from 'react-bootstrap';

const HorizontalForm = () => {
  return (
    <div style={{width: '100%'}}>
      <>
        <Row>
          <Form.Label column='lg' lg={2}>
            Large Text
          </Form.Label>
          <Col>
            <Form.Control size='lg' type='text' placeholder='Large text' />
          </Col>
        </Row>
        <br />
        <Row>
          <Form.Label column lg={2}>
            Normal Text
          </Form.Label>
          <Col>
            <Form.Control type='text' placeholder='Normal text' />
          </Col>
        </Row>
        <br />
        <Row>
          <Form.Label column='sm' lg={2}>
            Small Text
          </Form.Label>
          <Col>
            <Form.Control size='sm' type='text' placeholder='Small text' />
          </Col>
        </Row>
      </>
    </div>
  );
};

export default HorizontalForm;
