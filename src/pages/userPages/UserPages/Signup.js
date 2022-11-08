import React, {useState} from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import AppAnimateGroup from '@crema/core/AppAnimateGroup';
import {Button, Card, Form} from 'react-bootstrap';

import styles from '../index.module.scss';
import clsx from 'clsx';
import {useIntl} from 'react-intl';
import AppPageMetadata from '@crema/core/AppPageMetadata';

const Signup = () => {
  const {messages} = useIntl();
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
    <div className={clsx(styles.userPages, 'd-flex flex-column')}>
      <AppAnimateGroup type='bottom'>
        <AppPageMetadata title='Signup' />
        <div
          className={clsx(
            styles.userContainer,
            'd-flex flex-column align-items-center justify-content-center',
          )}
          key='a'>
          <Card
            className={clsx(
              styles.userCard,
              'w-100 overflow-hidden text-center',
            )}>
            <div
              className={clsx(
                styles.userCardHeader,
                'd-flex align-items-center justify-content-center',
              )}>
              <div className={styles.userCardLogo}>
                <img
                  src={'/assets/images/logo.png'}
                  alt='crema'
                  title='crema'
                />
              </div>
              <h3>
                <IntlMessages id='common.signup' />
              </h3>
            </div>

            <Form
              className={clsx(styles.userForm, 'mb-0')}
              name='basic'
              noValidate
              validated={validated}
              onSubmit={onSubmit}>
              <Form.Group controlId='validationCustom01'>
                <Form.Control
                  name='name'
                  placeholder={messages['common.name']}
                  type='text'
                  className={styles.formField}
                  required
                />
                <Form.Control.Feedback
                  type='invalid'
                  className={styles.feedback}>
                  Please input your Name!
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId='validationCustom02'>
                <Form.Control
                  name='email'
                  placeholder={messages['common.email']}
                  type='text'
                  className={styles.formField}
                  required
                />
                <Form.Control.Feedback
                  type='invalid'
                  className={styles.feedback}>
                  Please input your Email!
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId='validationCustom03'>
                <Form.Control
                  name='password'
                  placeholder={messages['common.password']}
                  type='password'
                  className={styles.formField}
                  required
                />
                <Form.Control.Feedback
                  type='invalid'
                  className={styles.feedback}>
                  Please input your Password!
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId='validationCustom04'>
                <Form.Control
                  name='confirmPassword'
                  placeholder={messages['common.retypePassword']}
                  type='password'
                  className={styles.formField}
                  required
                />
                <Form.Control.Feedback
                  type='invalid'
                  className={styles.feedback}>
                  Please input your Retype Password!
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Check
                  type='checkbox'
                  label={<IntlMessages id='common.iAgreeTo' />}
                  className={clsx(styles.checkboxWrapper, 'd-inline-block')}
                />
                <span className={styles.userFieldActionLink}>
                  <IntlMessages id='common.termConditions' />
                </span>
              </Form.Group>

              <Button className='w-100' type='submit'>
                <IntlMessages id='common.signup' />
              </Button>
            </Form>

            <div className={styles.userCardFooter}>
              <span>
                <IntlMessages id='common.alreadyHaveAccount' />
              </span>
              <span
                className={clsx(styles.userCardFooterLink, 'd-inline-block')}>
                <IntlMessages id='common.signInHere' />
              </span>
            </div>
          </Card>
        </div>
      </AppAnimateGroup>
    </div>
  );
};

export default Signup;
