import React, {useState} from 'react';
import {Button, Col, Form, InputGroup} from 'react-bootstrap';
// import DatePicker from 'react-bootstrap-date-picker';
import {countryList} from './countryList';
import AppRowContainer from '@crema/core/AppRowContainer';
import IntlMessages from '@crema/utility/IntlMessages';
import clsx from 'clsx';
import styles from '../index.module.scss';
import AppSelect from '@crema/core/AppSelect';

const Information = () => {
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
          <IntlMessages id='userProfile.information' />
        </h3>
        <AppRowContainer gutter={8}>
          <Form.Group as={Col} xs={12} md={12} controlId='validationCustom01'>
            <Form.Control
              as='textarea'
              rows={4}
              placeholder='Your Bio data here...'
              required
            />
            <Form.Control.Feedback type='invalid'>
              Please input your Bio Data
            </Form.Control.Feedback>
          </Form.Group>
          {/*<Col xs={12} md={12}>
          <InputGroup hasValidation>
            <DatePicker style={{width: '100%'}} value='DD M YYYY' />
            <Form.Control.Feedback type='invalid'>
              Please input Date!
            </Form.Control.Feedback>
          </InputGroup>
  </Col>*/}

          <Form.Group as={Col} xs={12} md={6} controlId='validationCustom02'>
            <AppSelect
              menus={countryList}
              defaultValue={countryList[0].name}
              selectionKey='name'
              onChange={() => {}}
            />

            <Form.Control.Feedback type='invalid'>
              Please input Your Country
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} xs={12} md={6} controlId='validationCustom03'>
            <Form.Control
              name='website'
              placeholder='Website'
              type='text'
              required
            />
            <Form.Control.Feedback type='invalid'>
              Please input your Website!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} xs={12} md={6} controlId='validationCustom04'>
            <Form.Control
              name='phone'
              placeholder='Phone Number'
              type='text'
              required
            />
            <Form.Control.Feedback type='invalid'>
              Please input your Phone number!
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

export default Information;
