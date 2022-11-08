import React from 'react';
import Form from 'react-bootstrap/Form';

const AppTextField = (props) => {
  return <Form.Control type='text' required {...props} />;
};

export default AppTextField;
