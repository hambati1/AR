import React from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import {FiFacebook, FiTwitter} from 'react-icons/fi';
import styles from "./index.module.scss";

const SocialMedia = (props) => {
  const {contact} = props;

  return (
    <div className={styles.contactDetailModalItem}>
      <h6 className={styles.contactDetailModalItemTitle}>
        <IntlMessages id='common.socialMedia' />
      </h6>

      <div className={styles.contactDetailModalItemContent}>
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

export default SocialMedia;

SocialMedia.propTypes = {
  contact: PropTypes.object.isRequired,
};
