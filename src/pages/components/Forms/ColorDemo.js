import React from 'react';
import {Form} from 'react-bootstrap';

const ColorDemo = () => {
  return (
    <div style={{width: '100%'}}>
      <>
        <Form.Label htmlFor='exampleColorInput'>Color picker</Form.Label>
        <Form.Control
          type='color'
          id='exampleColorInput'
          defaultValue='#563d7c'
          title='Choose your color'
        />
      </>
    </div>
  );
};

export default ColorDemo;
