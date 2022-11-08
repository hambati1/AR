import React from 'react';
import {Form} from 'react-bootstrap';

const Readonly = () => {
  return (
    <div>
      <Form.Control type='text' placeholder='Readonly input here...' readOnly />
    </div>
  );
};

export default Readonly;
