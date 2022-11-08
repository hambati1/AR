import React from 'react';
import {Form} from 'react-bootstrap';

const CustomizingDemo = () => {
  return (
    <div style={{width: '100%'}}>
      <Form>
        {['checkbox', 'radio'].map((type) => (
          <div key={type} className='mb-3'>
            <Form.Check type={type} id={`check-api-${type}`}>
              <Form.Check.Input type={type} isValid />
              <Form.Check.Label>{`Custom api ${type}`}</Form.Check.Label>
              <Form.Control.Feedback type='valid'>
                You did it!
              </Form.Control.Feedback>
            </Form.Check>
          </div>
        ))}
      </Form>
    </div>
  );
};

export default CustomizingDemo;
