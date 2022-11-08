import React from 'react';
import PropTypes from 'prop-types';
import AppsStarredIcon from '@crema/core/AppsStarredIcon';
import {AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai';
import styles from './index.module.scss'
import AppIconBtn from "@crema/core/AppIconBtn";

const ContactActions = (props) => {
  const {onDeleteContact, onChangeStarred, onOpenEditContact, contact} = props;

  return (
    <div className={styles.contactAction}>
      <div className={styles.contactActionHover}>
        <AppIconBtn
          smallBtn
          onClick={() => onOpenEditContact(contact)}
        >
          <AiOutlineEdit />
        </AppIconBtn>
        <AppsStarredIcon smallBtn item={contact} onChange={onChangeStarred} />
      </div>
      <AppIconBtn
        smallBtn
        onClick={onDeleteContact}
      >
        <AiOutlineDelete />
      </AppIconBtn>
    </div>
  );
};

export default ContactActions;

ContactActions.propTypes = {
  onDeleteContact: PropTypes.func,
  contact: PropTypes.object.isRequired,
  onChangeStarred: PropTypes.func,
  onOpenEditContact: PropTypes.func,
};
