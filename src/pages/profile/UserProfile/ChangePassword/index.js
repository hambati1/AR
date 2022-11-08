import React, { useState } from 'react';
import { Button, Col, Form, InputGroup } from 'react-bootstrap';
import AppRowContainer from '@crema/core/AppRowContainer';
import IntlMessages from '@crema/utility/IntlMessages';
import clsx from 'clsx';
import styles from '../index.module.scss';

const ChangePassword = () => {
  const [validated, setValidated] = useState(false);

  const onSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    console.log('Finish');
    setValidated(true);
  };

  return (
    <div className={styles.userProfileContainer}>
      <Form
        className='position-relative'
        noValidate
        validated={validated}
        onSubmit={onSubmit}>
        <h3 className={clsx(styles.userProfileFormTitle, 'mb-3')}>
          <IntlMessages id='userProfile.changePassword' />
        </h3>
        <AppRowContainer gutter={16}>
          <Form.Group as={Col} xs={12} md={6} controlId='validationCustom01'>
            <Form.Control
              name='oldPassword'
              placeholder='Enter password'
              type='password'
              required
            />
            <Form.Control.Feedback type='invalid'>
              Please input your Enter Password
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} xs={12} md={6} controlId='validationCustom02'>
            <Form.Control
              name='password'
              placeholder='Enter new password'
              type='password'
              required
            />
            <Form.Control.Feedback type='invalid'>
              Please input your New Password!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} xs={12} md={6} controlId='validationCustom03'>
            <Form.Control
              name='confirmPassword'
              placeholder='Confirm new password'
              type='password'
              required
              onChange={({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    'The Confirm Password that you entered do not match!',
                  );
                },
              })}
            />
            <Form.Control.Feedback type='invalid'>
              Please input Your Confirm Password!
            </Form.Control.Feedback>
          </Form.Group>
          <div className='d-block'>
            <Button
              variant='primary'
              type='submit'
              className={styles.userProfileBtn}>
              Save Changes
            </Button>
            <Button variant='outline-primary'>Cancel</Button>
          </div>
        </AppRowContainer>
      </Form>
    </div>
  );
};

export default ChangePassword;
