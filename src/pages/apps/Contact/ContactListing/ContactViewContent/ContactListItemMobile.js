import React from 'react';
import {withRouter} from 'react-router-dom';
import {MdLabelOutline} from 'react-icons/md';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import AppsStarredIcon from '@crema/core/AppsStarredIcon';
import {AiOutlineCheck} from 'react-icons/ai';
import {Image} from "react-bootstrap";
import styles from '../index.module.scss';

const ContactListItemMobile = ({
  contact,
  labelList,
  checkedContacts,
  onChangeStarred,
  onViewContactDetail,
  onChangeCheckedContacts,
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
        className={clsx(styles.contactListItemMobile, {
          rootCheck: checkedContacts.includes(contact.id),
        })}
        onClick={() => onViewContactDetail(contact)}>
        <div className={styles.contactListItemMainContentMobile}>
          <div
            className={clsx(styles.contactListAvatarMobileView, {
              checked: checkedContacts.includes(contact.id),
            })}
            onClick={(event) => {
              event.stopPropagation();
              onChangeCheckedContacts(
                !checkedContacts.includes(contact.id),
                contact.id,
              );
            }}>
            {checkedContacts.includes(contact.id) ? (
              <AiOutlineCheck />
            ) : (
              <span className={styles.contactListItemAvatarView}>
                {contact.image ? (
                  <Image className={styles.contactListItemAvatar} src={contact.image} roundedCircle />
                ) : (
                  <span className={styles.contactListItemAvatar}>
                    {contact.name[0].toUpperCase()}
                  </span>
                )}
              </span>
            )}
          </div>

          <div className={styles.contactListItemContentMobile}>
            <span className={clsx(styles.contactListItemMobileTitle, 'text-truncate')}>
              {contact.name}
            </span>

            <span className='text-truncate'>{contact.contact}</span>
          </div>
        </div>
        <div className={styles.contactListItemActionMobile}>
          <MdLabelOutline
            className={styles.contactListExportMobileIcon}
            style={{color: onGetLabelColor(contact.label)}}
          />

          <span
            className={styles.contactListItemStarMobile}
            onClick={(event) => event.stopPropagation()}>
            <AppsStarredIcon item={contact} onChange={onChangeStarred} />
          </span>
        </div>
      </div>
    </>
  );
};

export default withRouter(ContactListItemMobile);

ContactListItemMobile.defaultProps = {
  labelList: [],
  checkedContacts: [],
};

ContactListItemMobile.propTypes = {
  contact: PropTypes.object.isRequired,
  labelList: PropTypes.array,
  checkedContacts: PropTypes.array,
  onChangeStarred: PropTypes.func,
  onViewContactDetail: PropTypes.func,
  onChangeCheckedContacts: PropTypes.func,
};
