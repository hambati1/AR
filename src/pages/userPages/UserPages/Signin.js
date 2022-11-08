import React, {useState} from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import {useIntl} from 'react-intl';
import AppAnimateGroup from '@crema/core/AppAnimateGroup';
import {Button, Card, Form} from 'react-bootstrap';
import {FaFacebookF} from 'react-icons/fa';
import {AiOutlineGithub, AiOutlineTwitter} from 'react-icons/ai';

import styles from '../index.module.scss';
import clsx from 'clsx';
import AppPageMetadata from '@crema/core/AppPageMetadata';

const Signin = () => {
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
        <AppPageMetadata title='Signin' />
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
                <IntlMessages id='common.login' />
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

              <Form.Group controlId='validationCustom02'>
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

              <div className='d-flex align-items-center justify-content-between mb-3'>
                <Form.Check
                  type='checkbox'
                  label={<IntlMessages id='common.rememberMe' />}
                  className='d-inline-block me-1'
                />
                <span className={styles.userFieldActionLink}>
                  <IntlMessages id='common.termConditions' />
                </span>
              </div>

              <Button variant='primary' className='w-100' type='submit'>
                <IntlMessages id='common.login' />
              </Button>
            </Form>

            <div
              className={clsx(
                styles.userCardFooterAction,
                'd-flex align-items-center justify-content-center mb-2 mb-xxl-3 mt-2',
              )}>
              <span>
                <IntlMessages id='common.orLoginWith' />
              </span>
              <div
                className={clsx(
                  styles.userSocialLink,
                  'd-flex align-items-center justify-content-center justify-content-sm-start',
                )}>
                <Button variant='light'>
                  <FaFacebookF />
                </Button>
                <Button variant='light'>
                  <AiOutlineGithub />
                </Button>
                <Button variant='light'>
                  <AiOutlineTwitter />
                </Button>
              </div>
            </div>

            <div className={styles.userCardFooter}>
              <span>
                <IntlMessages id='common.dontHaveAccount' />
              </span>
              <span
                className={clsx(styles.userCardFooterLink, 'd-inline-block')}>
                <IntlMessages id='common.signup' />
              </span>
            </div>
          </Card>
        </div>
      </AppAnimateGroup>
    </div>
  );
};

export default Signin;
