import React from 'react';
import {Form} from 'react-bootstrap';

const Without = () => {
  return (
    <div style={{width: '100%'}}>
      <>
        <Form.Check aria-label='option 1' />
        <Form.Check type='radio' aria-label='radio 1' />
      </>
    </div>
  );
};

export default Without;
