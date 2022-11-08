import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useDropzone} from 'react-dropzone';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import IntlMessages from '@crema/utility/IntlMessages';
import AppScrollbar from '@crema/core/AppScrollbar';
import moment from 'moment';
import {
  onCreateContact,
  onUpdateSelectedContact,
} from '../../../../redux/actions/ContactApp';
import styles from './index.module.scss';
import {Button, Form, Image} from "react-bootstrap";

const AddContactForm = (props) => {
  const {
    userImage,
    selectContact,
    setUserImage,
    handleAddContactClose,
    onUpdateContact,
  } = props;
  const labelList = useSelector(({contactApp}) => contactApp.labelList);

  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setUserImage(URL.createObjectURL(acceptedFiles[0]));
    },
  });

  const {messages} = useIntl();

  const dispatch = useDispatch();

  const onFinish = (values) => {
    if (values.birthday)
      values.birthday = moment(values.birthday).format('DD-MM-YYYY');
    if (selectContact) {
      const newContact = {
        id: selectContact.id,
        isStarred: selectContact.isStarred,
        isFrequent: selectContact.isFrequent,
        image: userImage,
        ...values,
      };
      dispatch(onUpdateSelectedContact(newContact));
      if (onUpdateContact) onUpdateContact(newContact);
    } else {
      const newContact = {
        id: Math.floor(Math.random() * 1000),
        isStarred: false,
        isFrequent: Math.random() > 0.5,
        image: userImage,
        ...values,
      };
      dispatch(onCreateContact(newContact));
      handleAddContactClose();
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  console.log('selectContact: ', selectContact);
  return (
    <Form
      className={styles.contactForm}
      name='basic'
      initialValues={
        selectContact
          ? {
              ...selectContact,
              birthday: selectContact.birthday
                ? moment(selectContact.birthday, 'YYYY-MM-DD')
                : '',
            }
          : {}
      }
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}>
      <div className={styles.contactFormHeader}>
        <div {...getRootProps({className: 'dropzone'})}>
          <input {...getInputProps()} />
          <label htmlFor='icon-button-file'>
            <Image className={styles.contactFormAvatar} src={userImage} roundedCircle />
          </label>
        </div>
        {selectContact ? (
          <h4 className={styles.contactFormHeaderTitle}>{selectContact.name}</h4>
        ) : null}
      </div>

      <AppScrollbar className={styles.contactModalScrollbar}>
        <div className={styles.contactFormContent}>
          <div className={styles.contactFormContentItem}>
            <h6 className={styles.contactFormContentItemTitle}>
              <IntlMessages id='contactApp.personalDetails' />
            </h6>

            <div className={styles.contactFormContentField}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  name='name' type="text" placeholder={messages['common.name']} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  name='email' type="email" placeholder={messages['common.email']} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  name='contact' type="text" placeholder={messages['common.phone']} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                {/*<DatePicker />*/}
              </Form.Group>

              <Form.Select className="mb-3" aria-label="Default select example" name='label'>
                {labelList.map((label) => {
                  return (
                    <option value={label.id} key={label.id}>
                      {label.name}
                    </option>
                  );
                })}
              </Form.Select>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  name='website' type="text" placeholder={messages['common.website']} />
              </Form.Group>
            </div>
          </div>

          <div className={styles.contactFormContentItem}>
            <h6 className={styles.contactFormContentItemTitle}>
              <IntlMessages id='common.otherDetails' />
            </h6>

            <div className={styles.contactFormContentField}>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  name='company' type="text" placeholder={messages['common.company']} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  name='address' type="text" placeholder={messages['common.address']} />
              </Form.Group>
            </div>
          </div>

          <div className={styles.contactFormContentItem}>
            <h6 className={styles.contactFormContentItemTitle}>
              <IntlMessages id='common.socialMedia' />
            </h6>

            <div className={styles.contactFormContentField}>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  name='facebookId' type="text" placeholder={messages['common.facebookId']} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  name='twitterId' type="text" placeholder={messages['common.twitterId']} />
              </Form.Group>

            </div>
          </div>

          <div className={styles.contactFormContentItem}>
            <h6 className={styles.contactFormContentItemTitle}>
              <IntlMessages id='common.notes' />
            </h6>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Control name='notes' as="textarea" rows={3} placeholder={messages['common.notes']} />
            </Form.Group>
          </div>
        </div>

        <div className={styles.contactFormFooter}>
          <Button
            variant="outline-primary"
            className={styles.contactFormBtn}
            onClick={handleAddContactClose}>
            <IntlMessages id='common.cancel' />
          </Button>
          <Button variant='primary' className={styles.contactFormBtn} htmlType='submit'>
            <IntlMessages id='common.save' />
          </Button>
        </div>
      </AppScrollbar>
    </Form>
  );
};

export default AddContactForm;

AddContactForm.propTypes = {
  userImage: PropTypes.string.isRequired,
  setUserImage: PropTypes.func,
  handleAddContactClose: PropTypes.func,
  selectContact: PropTypes.object,
  onUpdateContact: PropTypes.any,
};
