import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useIntl} from 'react-intl';

import IntlMessages from '@crema/utility/IntlMessages';
import {useAuthMethod} from '@crema/utility/AuthHooks';
import {Button, Form} from 'react-bootstrap';

const SignInJwtAuth = () => {
  const history = useHistory();
  const {signInUser} = useAuthMethod();

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onGoToForgetPassword = () => {
    history.push('/forget-password', {tab: 'jwtAuth'});
  };

  function onRememberMe(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  const {messages} = useIntl();

  return (
    <div className='sign'>
      <div className='sign-content'>
        <Form
          className='sign-form'
          name='basic'
          initialValues={{
            remember: true,
            email: 'crema.demo@gmail.com',
            password: 'Pass@1!@all',
          }}
          onFinish={signInUser}
          onFinishFailed={onFinishFailed}>
          <Form.Item
            name='email'
            className='form-field'
            rules={[{required: true, message: 'Please input your Email!'}]}>
            <Form.Control type='email' placeholder={messages['common.email']} />
          </Form.Item>

          <Form.Item
            name='password'
            className='form-field'
            rules={[{required: true, message: 'Please input your Password!'}]}>
            <Form.Control
              type='password'
              placeholder={messages['common.password']}
            />
          </Form.Item>

          <div className='rememberMe'>
            <Form.Check
              onChange={onRememberMe}
              type='checkbox'
              label={messages['common.rememberMe']}
            />

            <span className='sign-link' onClick={onGoToForgetPassword}>
              <IntlMessages id='common.forgetPassword' />
            </span>
          </div>

          <div className='form-btn-field'>
            <Button type='primary' htmlType='submit' className='sign-btn'>
              <IntlMessages id='common.login' />
            </Button>
          </div>

          <div className='form-field-action'>
            <span className='sign-text-grey'>
              <IntlMessages id='common.dontHaveAccount' />
            </span>
            <Link to='/signup' className='underlineNone colorTextPrimary'>
              <IntlMessages id='common.signup' />
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignInJwtAuth;
