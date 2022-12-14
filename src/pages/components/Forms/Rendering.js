import React from 'react';
import {Form} from 'react-bootstrap';

const Rendering = () => {
  return (
    <div>
      <>
        <Form.Floating className='mb-3'>
          <Form.Control
            id='floatingInputCustom'
            type='email'
            placeholder='name@example.com'
          />
          <label htmlFor='floatingInputCustom'>Email address</label>
        </Form.Floating>
        <Form.Floating>
          <Form.Control
            id='floatingPasswordCustom'
            type='password'
            placeholder='Password'
          />
          <label htmlFor='floatingPasswordCustom'>Password</label>
        </Form.Floating>
      </>
    </div>
  );
};

export default Rendering;
