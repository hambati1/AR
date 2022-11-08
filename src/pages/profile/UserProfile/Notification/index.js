import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from '../index.module.scss';
import IntlMessages from '@crema/utility/IntlMessages';

const Notification = ({notification}) => {
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

  function onChange(event) {
    console.log(`switch to ${event.target.checked}`);
  }

  return (
    <div className={styles.userProfileContainer}>
      <Form
        className='position-relative'
        noValidate
        validated={validated}
        onSubmit={onSubmit}>
        <div className={styles.profileNotification}>
          <h3 className={styles.userProfileFormTitle}>
            <IntlMessages id='userProfile.activity' />
          </h3>
          <div className='position-relative'>
            {notification.activity.map((activity, index) => {
              return (
                <div
                  key={index}
                  className={clsx(
                    styles.notificationListItem,
                    'd-flex align-items-center',
                  )}>
                  <Form.Check
                    defaultChecked={activity.defaultChecked}
                    onChange={onChange}
                    type='switch'
                    id='custom-switch'
                    label={activity.title}
                    onChange={onChange}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.profileNotification}>
          <h3 className={styles.userProfileFormTitle}>
            <IntlMessages id='userProfile.application' />
          </h3>
          <div className='position-relative'>
            {notification.application.map((application, index) => {
              return (
                <div
                  key={index}
                  className={clsx(
                    styles.notificationListItem,
                    'd-flex align-items-center',
                  )}>
                  <Form.Check
                    defaultChecked={application.defaultChecked}
                    type='switch'
                    id='custom-switch'
                    label={application.title}
                    onChange={onChange}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className='d-block'>
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

export default Notification;

Notification.propTypes = {
  notification: PropTypes.object,
};
