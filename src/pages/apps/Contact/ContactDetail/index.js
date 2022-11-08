import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {onUpdateSelectedContact} from 'redux/actions/ContactApp';
import PropTypes from 'prop-types';
import ContactActions from './ContactActions';
import PersonalDetails from './PersonalDetails';
import OtherDetails from './OtherDetails';
import AppScrollbar from '@crema/core/AppScrollbar';
import styles from './index.module.scss';
import AppRowContainer from '@crema/core/AppRowContainer';
import IntlMessages from '@crema/utility/IntlMessages';
import {Button, Col, Image, Modal} from "react-bootstrap";

const ContactDetail = (props) => {
  const {
    isShowDetail,
    selectedContact,
    onShowDetail,
    onSelectContactsForDelete,
    onOpenEditContact,
  } = props;
  const dispatch = useDispatch();

  const [contact, setContact] = useState(selectedContact);

  useEffect(() => {
    setContact(selectedContact);
  }, [selectedContact]);

  const onChangeStarred = (checked) => {
    const updatedContact = contact;
    contact.isStarred = checked;
    setContact(updatedContact);
    dispatch(onUpdateSelectedContact(contact));
  };

  const onDeleteContact = () => {
    onSelectContactsForDelete([contact.id]);
    onShowDetail(false);
  };

  const onContactDetailClose = () => {
    onShowDetail(false);
  };

  return (
    <>
      <Modal
        show={isShowDetail}
        onHide={() => onShowDetail(false)}
        className={styles.contactDetailModal}>
        <div className={styles.contactDetailModalHeader}>
          <ContactActions
            onChangeStarred={onChangeStarred}
            onDeleteContact={onDeleteContact}
            onOpenEditContact={onOpenEditContact}
            contact={contact}
          />
          <div className={styles.contactDetailModalUser}>
            {contact.image ? (
              <Image
                className={styles.contactDetailModalUserAvatar} src={contact.image} roundedCircle />
            ) : (
              <span className={styles.contactDetailModalUserAvatar}>
                {contact.name[0].toUpperCase()}
              </span>
            )}
            <h4>{contact.name}</h4>
          </div>
        </div>

        <AppScrollbar className={styles.contactDetailModalScrollbar}>
          <div className={styles.contactDetailModalContent}>
            <AppRowContainer>
              <Col item xs={12} md={6}>
                <PersonalDetails contact={contact} />
              </Col>
              <Col item xs={12} md={6}>
                <OtherDetails contact={contact} />
              </Col>
            </AppRowContainer>
          </div>

          <div className={styles.contactFormFooter}>
            <Button
              variant='primary'
              className={styles.contactFormBtn}
              onClick={onContactDetailClose}>
              <IntlMessages id='common.cancel' />
            </Button>
          </div>
        </AppScrollbar>
      </Modal>
    </>
  );
};

export default ContactDetail;

ContactDetail.propTypes = {
  isShowDetail: PropTypes.bool.isRequired,
  onShowDetail: PropTypes.func.isRequired,
  selectedContact: PropTypes.object.isRequired,
  onSelectContactsForDelete: PropTypes.func,
  onOpenEditContact: PropTypes.func,
};
