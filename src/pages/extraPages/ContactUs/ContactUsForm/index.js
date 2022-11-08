import React from 'react';
import {Form, Button, Col} from 'react-bootstrap';
import AppRowContainer from '@crema/core/AppRowContainer';

const ContactUsForm = () => {
  const onFinish = (values) => {
    console.log('Finish:', values);
  };

  return (
    <Form onFinish={onFinish}>
      <AppRowContainer gutter={16}>
        <Col xs={12}>
          <Form.Group controlId='fullName'>
            <Form.Control name='fullName' required placeholder='Full Name' />
            <Form.Control.Feedback type='invalid'>
              Please input your Full Name!
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col xs={12}>
          <Form.Group controlId='email'>
            <Form.Control name='email' required placeholder='E-mail' />
            <Form.Control.Feedback type='invalid'>
              Please input your e-mail address!
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col xs={12}>
          <Form.Group controlId='message'>
            <Form.Control
              as='textarea'
              name='message'
              required
              placeholder='Message Here'
            />
            <Form.Control.Feedback type='invalid'>
              Please input your Message!
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col xs={12} md={12}>
          <Button type='submit' htmlType='submit'>
            Submit
          </Button>
        </Col>
      </AppRowContainer>
    </Form>
  );
};

export default ContactUsForm;
