import React from 'react';
import {Link} from 'react-router-dom';
import IntlMessages from '@crema/utility/IntlMessages';
import {useIntl} from 'react-intl';
import {FaFacebookF} from 'react-icons/fa';
import {useAuthMethod} from '@crema/utility/AuthHooks';
import {useAwsCognito} from '@crema/services/auth/aws-cognito/AWSAuthProvider';
import {Button, Form} from 'react-bootstrap';

const SignupAwsCognito = () => {
  const {signUpCognitoUser} = useAuthMethod();
  const {auth} = useAwsCognito();

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const {messages} = useIntl();
  return (
    <div className='signup'>
      <div className='signup-content'>
        <Form
          className='signup-form'
          name='basic'
          initialValues={{remember: true}}
          onFinish={signUpCognitoUser}
          onFinishFailed={onFinishFailed}>
          <Form.Item
            name='name'
            className='form-field'
            rules={[{required: true, message: 'Please input your Name!'}]}>
            <Form.Control type='text' placeholder={messages['common.name']} />
          </Form.Item>

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

          <Form.Item
            name='confirmPassword'
            className='form-field'
            rules={[
              {
                required: true,
                message: 'Please input your Retype Password!',
              },
            ]}>
            <Form.Control
              type='password'
              placeholder={messages['common.retypePassword']}
            />
          </Form.Item>

          <Form.Item
            className='form-field signup-checkbox'
            name='iAgreeTo'
            valuePropName='checked'>
            <Form.Check type='checkbox' label={messages['common.iAgreeTo']} />
            <span className='signup-link'>
              <IntlMessages id='common.termConditions' />
            </span>
          </Form.Item>

          <div className='form-btn-field'>
            <Button type='primary' htmlType='submit' className='signup-btn'>
              <IntlMessages id='common.signup' />
            </Button>
          </div>

          <div className='form-field-action'>
            <span className='signup-text-grey'>
              <IntlMessages id='common.alreadyHaveAccount' />
            </span>
            <Link to='/signIn' className='underlineNone colorTextPrimary'>
              <IntlMessages id='common.signIn' />
            </Link>
          </div>
        </Form>
      </div>

      <div className='signup-footer'>
        <span className='signup-text signup-text-grey'>
          <IntlMessages id='auth.orSignupWith' />
        </span>

        <div className='signup-socialLink'>
          <Button
            className='signup-icon-btn'
            shape='circle'
            onClick={() => auth.federatedSignIn({provider: 'Google'})}
          />
          <Button
            className='signup-icon-btn'
            shape='circle'
            onClick={() => auth.federatedSignIn({provider: 'Facebook'})}
            icon={<FaFacebookF />}
          />
        </div>
      </div>
    </div>
  );
};

export default SignupAwsCognito;
