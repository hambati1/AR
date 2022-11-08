import React from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import AppIconBtn from "@crema/core/AppIconBtn";
import {FiMoreVertical} from 'react-icons/fi';
import {Dropdown} from "react-bootstrap";
import clsx from "clsx";
import styles from "../index.module.scss";

const ItemMenu = (props) => {
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
  <Dropdown>
    <Dropdown.Toggle
      className={clsx(
        styles.dropdownToggleBtn,
        'p-0 bg-transparent border-0 d-flex align-items-center shadow-none',
      )} variant="success" id="dropdown-basic">
      <AppIconBtn
        smallBtn
        title={<IntlMessages id='common.more' />}
      >
        <FiMoreVertical />
      </AppIconBtn>
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item onClick={onChangeStarredStatus} href="#/action-1">
        {contact.isStarred ? (
          <IntlMessages id='common.unstarred' />
        ) : (
          <IntlMessages id='common.starred' />
        )}
      </Dropdown.Item>
      <Dropdown.Item onClick={onClickEditOption} href="#/action-2">
        <IntlMessages id='common.edit' />
      </Dropdown.Item>
      <Dropdown.Item onClick={onDeleteContact} href="#/action-3">
        <IntlMessages id='common.delete' />
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  );
};

export default ItemMenu;

ItemMenu.propTypes = {
  onSelectContactsForDelete: PropTypes.func,
  contact: PropTypes.object.isRequired,
  onChangeStarred: PropTypes.func,
  onOpenEditContact: PropTypes.func,
};
