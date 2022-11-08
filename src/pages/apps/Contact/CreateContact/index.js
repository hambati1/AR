import React, {useState} from 'react';
import PropTypes from 'prop-types';
import AddContactForm from './AddContactForm';
import styles from './index.module.scss';
import {Modal} from "react-bootstrap";

const CreateContact = ({
  isAddContact,
  handleAddContactClose,
  selectContact,
  onUpdateContact,
}) => {
  const [userImage, setUserImage] = useState(
    selectContact && selectContact.image
      ? selectContact.image
      : '/assets/images/placeholder.jpg',
  );

  return (
    <Modal
      show={isAddContact}
      onHide={handleAddContactClose}>
      <Modal.Header className={styles.modalHeader} closeButton />
      <AddContactForm
        selectContact={selectContact}
        setUserImage={setUserImage}
        userImage={userImage}
        onUpdateContact={onUpdateContact}
        handleAddContactClose={handleAddContactClose}
      />
    </Modal>
  );
};

export default CreateContact;

CreateContact.defaultProps = {
  selectContact: null,
};

CreateContact.propTypes = {
  isAddContact: PropTypes.bool.isRequired,
  handleAddContactClose: PropTypes.func.isRequired,
  onUpdateContact: PropTypes.func.isRequired,
  selectContact: PropTypes.object,
};
