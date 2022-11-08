import React from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import {AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai';
import AppsStarredIcon from '@crema/core/AppsStarredIcon';
import AppIconBtn from "@crema/core/AppIconBtn";
import styles from '../index.module.scss';

const ActionBtnHover = (props) => {
  const {
    onSelectContactsForDelete,
    contact,
    onChangeStarred,
    onOpenEditContact,
  } = props;

  const onDeleteContact = () => {
    onSelectContactsForDelete([contact.id]);
  };

  const onChangeStarredStatus = () => {
    onChangeStarred(!contact.isStarred, contact);
  };

  const onClickEditOption = () => {
    onOpenEditContact(contact);
  };

  return (
    <span className={styles.contactListItemActionHover}>
      <AppsStarredIcon smallBtn item={contact} onChange={onChangeStarredStatus} />
      <AppIconBtn
        smallBtn
        onClick={onClickEditOption}
        title={<IntlMessages id='common.edit' />}
      >
        <AiOutlineEdit />
      </AppIconBtn>
      <AppIconBtn
        smallBtn
        onClick={onDeleteContact}
        title={<IntlMessages id='common.delete' />}
      >
        <AiOutlineDelete />
      </AppIconBtn>
    </span>
  );
};

export default ActionBtnHover;

ActionBtnHover.propTypes = {
  onSelectContactsForDelete: PropTypes.func,
  contact: PropTypes.object.isRequired,
  onChangeStarred: PropTypes.func,
  onOpenEditContact: PropTypes.func,
};
