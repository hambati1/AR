import React from 'react';
import {Col, Form, Row} from 'react-bootstrap';

const ReadonlyPlain = () => {
  return (
    <div style={{width: '100%'}}>
      <Form>
        <Form.Group as={Row} className='mb-3' controlId='formPlaintextEmail'>
          <Form.Label column sm='2'>
            Email
          </Form.Label>
          <Col sm='10'>
            <Form.Control plaintext readOnly defaultValue='email@example.com' />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className='mb-3' controlId='formPlaintextPassword'>
          <Form.Label column sm='2'>
            Password
          </Form.Label>
          <Col sm='10'>
            <Form.Control type='password' placeholder='Password' />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default ReadonlyPlain;
