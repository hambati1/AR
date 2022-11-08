import React, {useState} from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import AppAnimateGroup from '@crema/core/AppAnimateGroup';
import {Button, Card, Col, Form} from 'react-bootstrap';
import AppRowContainer from '@crema/core/AppRowContainer';
import {useIntl} from 'react-intl';
import styles from '../index.module.scss';
import AppPageMetadata from '@crema/core/AppPageMetadata';
import clsx from 'clsx';

const ForgetPassword = () => {
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
        <AppPageMetadata title='Forgot Password' />
        <div
          className={clsx(
            styles.userContainer,
            'd-flex flex-column align-items-center justify-content-center',
          )}
          key='a'>
          <Card
            className={clsx(
              styles.userCard,
              styles.userCardLg,
              styles.userCardForPassword,
              'w-100 overflow-hidden text-center',
            )}>
            <AppRowContainer>
              <Col xs={12} lg={6}>
                <div
                  className={clsx(
                    styles.userStyledImg,
                    'h-auto w-100 d-inline-block',
                  )}>
                  <Logo />
                </div>
              </Col>

              <Col xs={12} lg={6}>
                <div className={styles.userStyledForPassword}>
                  <div
                    className={clsx(
                      styles.userCardHeader,
                      'd-flex align-items-center justify-content-center',
                    )}>
                    <h3>
                      <IntlMessages id='common.forgetPassword' />
                    </h3>
                  </div>

                  <div className={styles.userCardPara}>
                    <p className='mb-0'>
                      <IntlMessages id='common.forgetPasswordTextOne' />
                    </p>
                    <p className='mb-0'>
                      <IntlMessages id='common.forgetPasswordTextTwo' />
                    </p>
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

                    <Button type='primary' className='w-100' type='submit'>
                      <IntlMessages id='common.sendNewPassword' />
                    </Button>
                  </Form>
                </div>
              </Col>
            </AppRowContainer>
          </Card>
        </div>
      </AppAnimateGroup>
    </div>
  );
};

export default ForgetPassword;
