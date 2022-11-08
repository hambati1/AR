import React from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import {Link, useHistory} from 'react-router-dom';
import {useIntl} from 'react-intl';
import IntlMessages from '@crema/utility/IntlMessages';
import AppTextField from '@crema/core/AppFormComponents/AppTextField';
import Button from 'react-bootstrap/Button';
import AppInfoView from '@crema/core/AppInfoView';
import {useAuthMethod} from '@crema/utility/AuthHooks';
import {Form} from 'react-bootstrap';
import styles from './index.module.scss';
import clsx from 'clsx';
import AppIconBtn from '@crema/core/AppIconBtn';

const validationSchema = yup.object({
  email: yup
    .string()
    .email(<IntlMessages id='validation.emailFormat' />)
    .required(<IntlMessages id='validation.emailRequired' />),
  password: yup
    .string()
    .required(<IntlMessages id='validation.passwordRequired' />),
});

const SigninFirebase = () => {
  const {signInWithEmailAndPassword, signInWithPopup} = useAuthMethod();
  const history = useHistory();

  const onGoToForgetPassword = () => {
    history.push('/forget-password', {tab: 'firebase'});
  };

  const {messages} = useIntl();

  return (
    <div className='flex-grow-1 d-flex flex-column'>
      <div className='flex-grow-1 d-flex flex-column mb-3'>
      <div className='text-white'>
      <IntlMessages  id='common.signIn' />
        <div className='mb-3 mb-lg-4 text--50'>
          <span className='me-1'>
            <IntlMessages id='common.firstTimehere' />
          </span>
          <span className={styles.signLink}>
            <Link to='/signup'>
              <IntlMessages id='common.signup' />
            </Link>
          </span>
        </div>
        </div> 
        <Formik
          validateOnChange={true}
          initialValues={{
            email: 'crema.demo@gmail.com',
            password: 'Pass@1!@all',
          }}
          validationSchema={validationSchema}
          onSubmit={(data, {setSubmitting}) => {
            setSubmitting(true);
            signInWithEmailAndPassword(data);
            setSubmitting(false);
          }}>
          {({isSubmitting, handleSubmit}) => (
            <Form noValidate onSubmit={handleSubmit}>
              <div className='mb-3 mb-lg-4 text-white'>
              <IntlMessages id='common.email' />
                <AppTextField
                  // placeholder={messages['common.email']}
                  name='email'
                  label={<IntlMessages id='common.email' />}
                  variant='outlined'
                />
              </div>
              <div className='mb-3 mb-lg-4 text-white'>
              <IntlMessages id='common.password' />
                <AppTextField
                  type='password'
                  // placeholder={messages['common.password']}
                  label={<IntlMessages id='common.password' />}
                  name='password'
                  variant='outlined'
                />
              </div>

              <div className='mb-3 mb-lg-4 text-white'>
                <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                  <Form.Check
                    type='checkbox'
                    label={<IntlMessages id='common.rememberMe' />}
                  />
                </Form.Group>
                <span
                  className={clsx(
                    styles.forgetLink,
                    'd-block text-end ',
                  )}
                  onClick={onGoToForgetPassword}>
                  <IntlMessages id='common.forgetPassword' />
                </span>
              </div>
              <Button
                variant='primary'
                type='submit'
                disabled={isSubmitting}
                className={styles.signBtn}>
                <IntlMessages id='common.login' />
              </Button>
            </Form>
          )}
        </Formik>
      </div>

      <AppInfoView />
    </div>
  );
};

export default SigninFirebase;
