import React from 'react';
import {withRouter} from 'react-router-dom';
import {MdLabelOutline} from 'react-icons/md';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import ItemMenu from './ItemMenu';
import AppsStarredIcon from '@crema/core/AppsStarredIcon';
import ActionBtnHover from './ActionBtnHover';
import {Form, Image} from "react-bootstrap";
import styles from '../index.module.scss';

const ContactListItem = ({
  contact,
  labelList,
  onChangeCheckedContacts,
  checkedContacts,
  onChangeStarred,
  onSelectContactsForDelete,
  onViewContactDetail,
  onOpenEditContact,
}) => {
  const onGetLabelColor = (labelId) => {
    if (labelId) {
      return (
        labelList.length > 0 &&
        labelList.find((label) => label.id === labelId).color
      );
    }
  };

  return (
    <>
      <div
        key={contact.id}
        className={clsx(styles.contactListItem, {
          rootCheck: checkedContacts.includes(contact.id),
        })}
        onClick={() => onViewContactDetail(contact)}>
        <span
          className={styles.contactListItemCheckboxView}
          onClick={(event) => event.stopPropagation()}>
          <Form.Check type="checkbox"
                      checked={checkedContacts.includes(contact.id)}
                      onChange={(event) => onChangeCheckedContacts(event, contact.id)}
                      color='primary' />
        </span>
        <span
          className={styles.contactListItemStar}
          onClick={(event) => event.stopPropagation()}>
          <AppsStarredIcon smallBtn item={contact} onChange={onChangeStarred} />
        </span>
        <span className={styles.contactListItemAvatarView}>
          {contact.image ? (
            <Image className={styles.contactListItemAvatar} src={contact.image} roundedCircle />
          ) : (
            <span className={styles.contactListItemAvatar}>
              {contact.name[0].toUpperCase()}
            </span>
          )}
        </span>
        <span className={clsx(styles.contactListItemTitle, 'text-truncate')}>
          {contact.name}
        </span>

        <span className={clsx(styles.contactListItemCol, styles.contactListItemEmail, 'text-truncate')}>
          <span className='text-truncate'>
            {contact.email ? contact.email : null}
          </span>
        </span>
        <span className={clsx(styles.contactListItemCol, 'text-truncate')}>
          <span className='text-truncate'>{contact.contact}</span>
        </span>
        <span className={clsx(styles.contactListItemCol, styles.contactListItemCompany, 'text-truncate')}>
          <span className='text-truncate'>
            {contact.company ? contact.company : null}
          </span>
        </span>

        <span className={styles.contactListItemAction}>
          <MdLabelOutline
            className={styles.contactListExportIcon}
            style={{color: onGetLabelColor(contact.label)}}
          />

          <span
            className={styles.contactListItemMenuView}
            onClick={(event) => event.stopPropagation()}>
            <ItemMenu
              onSelectContactsForDelete={onSelectContactsForDelete}
              contact={contact}
              onChangeStarred={onChangeStarred}
              onOpenEditContact={onOpenEditContact}
            />
          </span>
        </span>

        <ActionBtnHover
          contact={contact}
          onChangeStarred={onChangeStarred}
          onSelectContactsForDelete={onSelectContactsForDelete}
          onOpenEditContact={onOpenEditContact}
        />
      </div>
    </>
  );
};

export default withRouter(ContactListItem);

ContactListItem.defaultProps = {
  labelList: [],
  checkedContacts: [],
};

ContactListItem.propTypes = {
  contact: PropTypes.object.isRequired,
  labelList: PropTypes.array,
  onChangeCheckedContacts: PropTypes.func,
  checkedContacts: PropTypes.array,
  onChangeStarred: PropTypes.func,
  onSelectContactsForDelete: PropTypes.func,
  onViewContactDetail: PropTypes.func,
  onOpenEditContact: PropTypes.func,
};
