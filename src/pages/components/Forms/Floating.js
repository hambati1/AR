import React from 'react';
import {FloatingLabel, Form} from 'react-bootstrap';

const Floating = () => {
  return (
    <div style={{width: '100%'}}>
      <>
        <FloatingLabel
          controlId='floatingInput'
          label='Email address'
          className='mb-3'>
          <Form.Control type='email' placeholder='name@example.com' />
        </FloatingLabel>
        <FloatingLabel controlId='floatingPassword' label='Password'>
          <Form.Control type='password' placeholder='Password' />
        </FloatingLabel>
      </>
    </div>
  );
};

export default Floating;
