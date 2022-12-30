import React, {useState} from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import AppAnimateGroup from '@crema/core/AppAnimateGroup';
import {useIntl} from 'react-intl';
import '../index.style.scss';
import AppPageMetadata from '@crema/core/AppPageMetadata';
import {ReactComponent as Logo} from '../../../assets/icon/comingsoon.svg';
import {Button, Form} from 'react-bootstrap';

const ComingSoon = () => {
  const {messages} = useIntl();
  const [validated, setValidated] = useState(false);

  const onFinish = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    console.log('Finish');
    setValidated(true);
  };

  return (
    <AppAnimateGroup type='bottom'>
      <AppPageMetadata title='Coming Soon' />
      <div className='error-container' key='coming_soon'>
        <div className='error-img-lg'>
          <Logo />
        </div>
        <div>
          <div className='error-content'>
            <h3>
              <IntlMessages id='error.comingSoon' />!
            </h3>
            <div className='error-para'>
              <p className='mb-0'>
                <IntlMessages id='error.comingSoonMessage1' />
              </p>
              <p className='mb-0'>
                <IntlMessages id='error.comingSoonMessage2' />
              </p>
            </div>
          </div>
          <div className='error-form-coming'>
            <Form
              noValidate
              validated={validated}
              className='error-form'
              name='basic'
              initialValues={{remember: true}}
              onSubmit={onFinish}>
              <Form.Group name='email' className='form-field'>
                <Form.Control
                  type='text'
                  placeholder={messages['common.emailAddress']}
                />
                <Form.Control.Feedback type='invalid'>
                  Please enter Email Address!
                </Form.Control.Feedback>
              </Form.Group>

              <Button type='primary' className='error-btn' htmlType='submit'>
                <IntlMessages id='error.notifyMe' />
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </AppAnimateGroup>
  );
};

export default ComingSoon;
