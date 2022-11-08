import React from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import ItemMenu from './ItemMenu';
import clsx from 'clsx';
import ActionBtnHover from './ActionBtnHover';
import {Card, Form, Image} from "react-bootstrap";
import {BiIdCard} from 'react-icons/bi';
import {FiPhone} from 'react-icons/fi';
import styles from '../index.module.scss';

const ContactGridItem = (props) => {
  const {
    contact,
    onChangeCheckedContacts,
    checkedContacts,
    onChangeStarred,
    onSelectContactsForDelete,
    onOpenEditContact,
    onViewContactDetail,
  } = props;

  return (
    <Card
      className={styles.contactGridCard}
      onClick={() => onViewContactDetail(contact)}>
      <div className={styles.contactGridCardHeader}>
        <span
          className={styles.contactGridCardHeaderCheckbox}
          onClick={(event) => event.stopPropagation()}>
          <Form.Check type="checkbox"
                      checked={checkedContacts.includes(contact.id)}
                      onChange={(event) => onChangeCheckedContacts(event, contact.id)}
                      color='primary' />
        </span>

        {contact.image ? (
          <Image className={styles.contactGridCardAvatar} src={contact.image} roundedCircle />
        ) : (
          <span className={styles.contactGridCardAvatar}>
            {contact.name[0].toUpperCase()}
          </span>
        )}

        <span
          className={styles.contactGridCardHeaderAction}
          onClick={(event) => event.stopPropagation()}>
          <ItemMenu
            onSelectContactsForDelete={onSelectContactsForDelete}
            contact={contact}
            onChangeStarred={onChangeStarred}
            onOpenEditContact={onOpenEditContact}
          />
        </span>

        <ActionBtnHover
          contact={contact}
          onChangeStarred={onChangeStarred}
          onSelectContactsForDelete={onSelectContactsForDelete}
          onOpenEditContact={onOpenEditContact}
        />
      </div>

      <div className={styles.contactGridCardContent}>
        <h3 className={styles.contactGridCardTitle}>{contact.name}</h3>
        <p className='text-truncate'>{contact.email ? contact.email : null}</p>
      </div>

      <div className={styles.contactGridCardAction}>
        <div className={styles.contactGridCardActionItem}>
          <BiIdCard className={styles.contactGridCardIcon} />
          <p className='text-truncate mb-0'>
            {contact.company ? (
              contact.company
            ) : (
              <IntlMessages id='common.na' />
            )}
          </p>
        </div>
        <div className={styles.contactGridCardActionItem}>
          <FiPhone className={styles.contactGridCardIcon} />
          <p className='text-truncate mb-0'>{contact.contact}</p>
        </div>
      </div>
    </Card>
  );
};

export default ContactGridItem;

ContactGridItem.defaultProps = {
  checkedContacts: [],
};

ContactGridItem.propTypes = {
  contact: PropTypes.object.isRequired,
  onChangeCheckedContacts: PropTypes.func,
  checkedContacts: PropTypes.array,
  onChangeStarred: PropTypes.func,
  onSelectContactsForDelete: PropTypes.func,
  onOpenEditContact: PropTypes.func,
  onViewContactDetail: PropTypes.func,
};
