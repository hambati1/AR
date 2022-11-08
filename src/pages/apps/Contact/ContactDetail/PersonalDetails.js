import React from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import styles from './index.module.scss'

import {FiMail, FiPhone} from 'react-icons/fi';
import {AiOutlineGlobal, AiOutlineShopping} from 'react-icons/ai';

const PersonalDetails = ({contact}) => {
  return (
    <div className={styles.contactDetailModalItem}>
      <h6 className={styles.contactDetailModalItemTitle}>
        <IntlMessages id='contactApp.personalDetails' />
      </h6>

      <div className={styles.contactDetailModalItemContent}>
        <div className={styles.contactOtherDetailItem}>
          <FiMail className={styles.contactOtherDetailItemIcon} />
          <div className={styles.contactOtherDetailItemContent}>
            {contact.email}
          </div>
        </div>

        <div className={styles.contactOtherDetailItem}>
          <FiPhone className={styles.contactOtherDetailItemIcon} />
          <div className={styles.contactOtherDetailItemContent}>
            {contact.contact}
          </div>
        </div>

        <div className={styles.contactOtherDetailItem}>
          <AiOutlineGlobal className={styles.contactOtherDetailItemIcon} />
          <div className={styles.contactOtherDetailItemContent}>
            {contact.website ? (
              contact.website
            ) : (
              <IntlMessages id='common.na' />
            )}
          </div>
        </div>

        <div className={styles.contactOtherDetailItem}>
          <AiOutlineShopping className={styles.contactOtherDetailItemIcon} />
          <div className={styles.contactOtherDetailItemContent}>
            {contact.birthday ? (
              contact.birthday
            ) : (
              <IntlMessages id='common.na' />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;

PersonalDetails.propTypes = {
  contact: PropTypes.object,
};
