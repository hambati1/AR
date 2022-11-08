import React, {useState} from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import AppAnimateGroup from '@crema/core/AppAnimateGroup';
import {useIntl} from 'react-intl';
import AppRowContainer from '@crema/core/AppRowContainer';
import {Button, Card, Col, Form} from 'react-bootstrap';
import styles from '../index.module.scss';
import AppPageMetadata from '@crema/core/AppPageMetadata';
import clsx from 'clsx';

const UnlockScreen = () => {
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
        <AppPageMetadata title='Unlock Screen' />
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
              styles.userCardUnlock,
              'w-100 overflow-hidden text-center',
            )}>
            <AppRowContainer>
              <Col xs={12} md={6}>
                <div
                  className={clsx(
                    styles.userStyledImg,
                    'h-auto w-100 d-inline-block',
                  )}>
                  <Logo />
                </div>
              </Col>

              <Col xs={12} md={6}>
                <div
                  className={clsx(
                    styles.userCardHeader,
                    'd-flex align-items-center justify-content-center',
                  )}>
                  <h3>
                    <IntlMessages id='common.unlockScreen' />
                  </h3>
                </div>
                <div className={styles.userCardPara}>
                  <span>
                    <IntlMessages id='common.unlockScreenTextOne' />
                  </span>
                  <span>
                    <IntlMessages id='common.unlockScreenTextTwo' />
                  </span>
                </div>

                <Form
                  className={clsx(styles.userForm, 'mb-0')}
                  name='basic'
                  noValidate
                  validated={validated}
                  onSubmit={onSubmit}>
                  <Form.Group controlId='validationCustom01'>
                    <Form.Control
                      name='password'
                      placeholder={messages['common.password']}
                      type='password'
                      required
                    />
                    <Form.Control.Feedback type='invalid'>
                      Please input your Password!
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Button
                    variant='primary'
                    className='w-100 mt-4'
                    type='submit'>
                    <IntlMessages id='common.unlockItForMe' />
                  </Button>
                </Form>
              </Col>
            </AppRowContainer>
          </Card>
        </div>
      </AppAnimateGroup>
    </div>
  );
};

export default UnlockScreen;
