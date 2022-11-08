import React from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import {RiFoldersLine} from 'react-icons/ri';
import {AiOutlineHome} from 'react-icons/ai';
import {FiFacebook, FiTwitter} from 'react-icons/fi';
import styles from './index.module.scss';

const OtherDetails = (props) => {
  const {contact} = props;

  return (
    <div className={styles.contactDetailModalItem}>
      <h6 className={styles.contactDetailModalItemTitle}>
        <IntlMessages id='common.otherDetails' />
      </h6>

      <div className={styles.contactDetailModalItemContent}>
        <div className={styles.contactOtherDetailItem}>
          <RiFoldersLine className={styles.contactOtherDetailItemIcon} />
          <div className={styles.contactOtherDetailItemContent}>
            {contact.company ? (
              contact.company
            ) : (
              <IntlMessages id='common.na' />
            )}
          </div>
        </div>

        <div className={styles.contactOtherDetailItem}>
          <AiOutlineHome className={styles.contactOtherDetailItemIcon} />
          <div className={styles.contactOtherDetailItemContent}>
            {contact.address ? (
              contact.address
            ) : (
              <IntlMessages id='common.na' />
            )}
          </div>
        </div>
        <div className={styles.contactOtherDetailItem}>
          <FiFacebook className={styles.contactOtherDetailItemIcon} />
          <div className={styles.contactOtherDetailItemContent}>
            {contact.facebookId ? (
              contact.facebookId
            ) : (
              <IntlMessages id='common.na' />
            )}
          </div>
        </div>

        <div className={styles.contactOtherDetailItem}>
          <FiTwitter className={styles.contactOtherDetailItemIcon} />
          <div className={styles.contactOtherDetailItemContent}>
            {contact.twitterId ? (
              contact.twitterId
            ) : (
              <IntlMessages id='common.na' />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherDetails;

OtherDetails.propTypes = {
  contact: PropTypes.object.isRequired,
};
