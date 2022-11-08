import React from 'react';
import {Link} from 'react-router-dom';
import IntlMessages from '@crema/utility/IntlMessages';
import {useIntl} from 'react-intl';
import {Button, Form} from 'react-bootstrap';
import AppTextField from '@crema/core/AppFormComponents/AppTextField';

const ForgetPasswordFirebase = () => {
  const {messages} = useIntl();

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  return (
    <div className='forget-content'>
      <p className='forget-para'>
        <IntlMessages id='common.forgetPasswordTextOne' />
        <span>
          <IntlMessages id='common.forgetPasswordTextTwo' />
        </span>
      </p>

      <Form className='forget-form' name='basic' onFinish={onFinish}>
        <div className='mb-3 mb-lg-4'>
        <AppTextField
          type='email'
          placeholder={messages['common.emailAddress']}
          name='email'
        />
        </div>

        <div className='form-field'>
          <Button type='primary' htmlType='submit' className='forget-btn'>
            <IntlMessages id='common.sendNewPassword' />
          </Button>
        </div>

        <p className='forget-footer'>
          <IntlMessages id='common.alreadyHavePassword' />
          <Link to='/signin'>
            <IntlMessages id='common.signIn' />
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default ForgetPasswordFirebase;
