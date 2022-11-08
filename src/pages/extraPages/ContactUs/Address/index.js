import React from 'react';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import {FiMail, FiPhone} from 'react-icons/fi';
import styles from './index.module.scss';
import clsx from 'clsx';

const Address = () => {
  return (
    <div className={clsx(styles.contactAddress, 'position-relative')}>
      <div
        className={clsx(
          styles.contactAddressItem,
          'd-flex align-items-center',
        )}>
        <div className={styles.avatarIcon}>
          <HiOutlineLocationMarker />
        </div>
        <p>
          795 Folsom Ave, Suite 600 <br /> San Francisco, CA 94107
        </p>
      </div>
      <div
        className={clsx(
          styles.contactAddressItem,
          'd-flex align-items-center',
        )}>
        <div className={styles.avatarIcon}>
          <FiPhone />
        </div>
        <p>(120) 456-789-123</p>
      </div>
      <div
        className={clsx(
          styles.contactAddressItem,
          'd-flex align-items-center',
        )}>
        <div className={styles.avatarIcon}>
          <FiMail />
        </div>
        <p>support@yourmail.com</p>
      </div>
    </div>
  );
};

export default Address;
