import React, {useState} from 'react';
import {Button, Col, Form} from 'react-bootstrap';
import AppRowContainer from '@crema/core/AppRowContainer';
import ProfileConnection from './ProfileConnection';
import PropTypes from 'prop-types';
import IntlMessages from '@crema/utility/IntlMessages';
import clsx from 'clsx';
import styles from '../index.module.scss';

const SocialLink = ({socialLink}) => {
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
          <IntlMessages id='userProfile.socialLink' />
        </h3>
        <AppRowContainer gutter={16}>
          <Form.Group as={Col} xs={12} md={6} controlId='validationCustom01'>
            <Form.Control
              name='twitter'
              placeholder='Twitter'
              type='text'
              required
            />
            <Form.Control.Feedback type='invalid'>
              Please Enter your Twitter url
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} xs={12} md={6} controlId='validationCustom02'>
            <Form.Control
              name='facebook'
              placeholder='Facebook'
              type='text'
              required
            />
            <Form.Control.Feedback type='invalid'>
              Please Enter your Facebook url
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} xs={12} md={6} controlId='validationCustom03'>
            <Form.Control
              name='google'
              placeholder='Google'
              type='text'
              required
            />
            <Form.Control.Feedback type='invalid'>
              Please Enter your Google url
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} xs={12} md={6} controlId='validationCustom04'>
            <Form.Control
              name='linkedIn'
              placeholder='LinkedIn'
              type='text'
              required
            />
            <Form.Control.Feedback type='invalid'>
              Please Enter your LinkedIn url
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} xs={12} md={6} controlId='validationCustom05'>
            <Form.Control
              name='instagram'
              placeholder='Instagram'
              type='text'
              required
            />
            <Form.Control.Feedback type='invalid'>
              Please Enter your Instagram url
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} xs={12} md={6} controlId='validationCustom05'>
            <Form.Control
              name='quora'
              placeholder='Quora'
              type='text'
              required
            />
            <Form.Control.Feedback type='invalid'>
              Please Enter your Quora url
            </Form.Control.Feedback>
          </Form.Group>
        </AppRowContainer>

        <ProfileConnection profileConnection={socialLink} />

        <div className='d-block mt-4'>
          <Button
            variant='primary'
            type='submit'
            className={styles.userProfileBtn}>
            Save Changes
          </Button>
          <Button variant='outline-primary'>Cancel</Button>
        </div>
      </Form>
    </div>
  );
};

export default SocialLink;

SocialLink.propTypes = {
  socialLink: PropTypes.array,
};
