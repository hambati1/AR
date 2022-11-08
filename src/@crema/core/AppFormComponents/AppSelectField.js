import React from 'react';
import Form from 'react-bootstrap/Form';

const AppSelectField = (props) => {
  return <Form.Control type='text' required {...props} />;
};

export default AppSelectField;
