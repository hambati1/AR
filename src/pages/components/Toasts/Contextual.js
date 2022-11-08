import React from 'react';
import {Toast} from 'react-bootstrap';
import styles from './index.module.scss';
import clsx from 'clsx';

const Contextual = () => {
  return (
    <div>
      {[
        'Primary',
        'Secondary',
        'Success',
        'Danger',
        'Warning',
        'Info',
        'Light',
        'Dark',
      ].map((variant, idx) => (
        <Toast
          className='d-inline-block m-1'
          bg={variant.toLowerCase()}
          key={idx}>
          <Toast.Header className={styles.toastHeader}>
            <img
              src='holder.js/20x20?text=%20'
              className={clsx(styles.toastHeadingImg, 'rounded')}
              alt=''
            />
            <strong className={styles.toastHeading}>Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body className={variant === 'Dark' && 'text-white'}>
            Hello, world! This is a toast message.
          </Toast.Body>
        </Toast>
      ))}
    </div>
  );
};

export default Contextual;
