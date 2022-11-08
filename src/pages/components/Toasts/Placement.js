import React from 'react';
import {Toast, ToastContainer} from 'react-bootstrap';
import styles from './index.module.scss';
import clsx from 'clsx';

const Placement = () => {
  return (
    <div
      style={{width: '100%'}}
      aria-live='polite'
      aria-atomic='true'
      className='bg-dark position-relative'>
      <ToastContainer position='top-end' className='p-3'>
        <Toast>
          <Toast.Header className={styles.toastHeader}>
            <img
              src='holder.js/20x20?text=%20'
              className={clsx(styles.toastHeadingImg, 'rounded')}
              alt=''
            />
            <strong className={styles.toastHeading}>Bootstrap</strong>
            <small className='text-muted'>just now</small>
          </Toast.Header>
          <Toast.Body>See? Just like this.</Toast.Body>
        </Toast>
        <Toast>
          <Toast.Header className={styles.toastHeader}>
            <img
              src='holder.js/20x20?text=%20'
              className={clsx(styles.toastHeadingImg, 'rounded')}
              alt=''
            />
            <strong className={styles.toastHeading}>Bootstrap</strong>
            <small className='text-muted'>2 seconds ago</small>
          </Toast.Header>
          <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default Placement;
