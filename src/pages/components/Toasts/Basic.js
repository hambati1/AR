import React from 'react';
import {Toast} from 'react-bootstrap';
import styles from './index.module.scss';
import clsx from 'clsx';

const Basic = () => {
  return (
    <div>
      <Toast>
        <Toast.Header className={styles.toastHeader}>
          <img
            src='holder.js/20x20?text=%20'
            className={clsx(styles.toastHeadingImg, 'rounded')}
            alt=''
          />
          <strong className={styles.toastHeading}>Bootstrap</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
      </Toast>
    </div>
  );
};

export default Basic;
