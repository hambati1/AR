import React, {useState} from 'react';
import {Form, Col, Button} from 'react-bootstrap';
import AppRowContainer from '@crema/core/AppRowContainer';
import {useDropzone} from 'react-dropzone';
import {useAuthUser} from '@crema/utility/AuthHooks';
import clsx from 'clsx';
import styles from '../index.module.scss';
import styles2 from './index.module.scss';

const PersonalInfo = () => {
  const {user} = useAuthUser();
  const [validated, setValidated] = useState(false);

  const [userImage, setUserImage] = useState('/assets/images/placeholder.jpg');

  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setUserImage(URL.createObjectURL(acceptedFiles[0]));
    },
  });
  console.log('user', user);
  const onReset = () => {
    setUserImage('/assets/images/placeholder.jpg');
  };

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
        noValidate
        validated={validated}
        onSubmit={onSubmit}
        initialValues={{
          ...user,
          userImage: user.photoURL
            ? user.photoURL
            : '/assets/images/placeholder.jpg',
        }}>
        <div className={clsx(styles2.infoUpload, 'd-flex align-items-center')}>
          <img
            className={clsx(styles2.infoUploadAvatar, 'me-3')}
            src={userImage}
          />

          <div className={styles2.infoUploadContent}>
            <div
              className={clsx(
                styles2.infoUploadBtnGroup,
                'd-flex align-items-center',
              )}>
              <div {...getRootProps({className: 'dropzone'})}>
                <input {...getInputProps()} />
                <label htmlFor='icon-button-file'>
                  <Button type='primary' className={styles2.btnUpload}>
                    Upload
                  </Button>
                </label>
              </div>
              <Button
                onClick={onReset}
                variant='outline-primary'
                className={styles2.btnUpload}>
                Reset
              </Button>
            </div>
            <p>Allowed JPG, GIF or PNG. Max size of 800kB</p>
          </div>
        </div>
        <AppRowContainer>
          <Form.Group as={Col} xs={12} md={6} controlId='validationCustom01'>
            <Form.Control
              name='displayName'
              placeholder='Full Name'
              type='text'
              value={user.displayName}
              required
            />
            <Form.Control.Feedback type='invalid'>
              Please input your Full Name!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} xs={12} md={6} controlId='validationCustom02'>
            <Form.Control
              name='username'
              placeholder='User Name'
              type='text'
              required
            />
            <Form.Control.Feedback type='invalid'>
              Please input your User Name!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} xs={12} md={6} controlId='validationCustom03'>
            <Form.Control
              name='email'
              placeholder='E-mail'
              type='text'
              value={user.email}
              required
            />
            <Form.Control.Feedback type='invalid'>
              Please input your e-mail address!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} xs={12} md={6} controlId='validationCustom04'>
            <Form.Control
              name='company'
              placeholder='Company'
              type='text'
              required
            />
            <Form.Control.Feedback type='invalid'>
              Please input your company!
            </Form.Control.Feedback>
          </Form.Group>
          <div className='d-block'>
            <Button
              variant='primary'
              type='submit'
              className={styles.userProfileBtn}>
              Save Changes
            </Button>
            <Button variant='outline-primary'>Cancel</Button>
          </div>
        </AppRowContainer>
      </Form>
    </div>
  );
};

export default PersonalInfo;
