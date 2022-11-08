import React from 'react';
import {InputGroup, Form} from 'react-bootstrap';
import styles from './index.module.scss';

const Input = () => {
  return (
    <div>
      <InputGroup hasValidation>
        <InputGroup.Text className={styles.inputGroupText}>@</InputGroup.Text>
        <Form.Control
          type='text'
          required
          isInvalid
          className={styles.inputFormControl}
        />
        <Form.Control.Feedback type='invalid'>
          Please choose a username.
        </Form.Control.Feedback>
      </InputGroup>
    </div>
  );
};

export default Input;
