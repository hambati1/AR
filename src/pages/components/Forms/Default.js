import React from 'react';
import {Form} from 'react-bootstrap';

const Default = () => {
  return (
    <div style={{width: '100%'}}>
      <Form>
        {['checkbox', 'radio'].map((type) => (
          <div key={`default-${type}`} className='mb-3'>
            <Form.Check
              type={type}
              id={`default-${type}`}
              label={`default ${type}`}
            />

            <Form.Check
              disabled
              type={type}
              label={`disabled ${type}`}
              id={`disabled-default-${type}`}
            />
          </div>
        ))}
      </Form>
    </div>
  );
};

export default Default;
