import React from 'react';
import styles from './index.module.scss';
import {Spinner} from 'react-bootstrap';
import clsx from 'clsx';

const AppLoader = () => {
  return (
    <div
      className={clsx(
        styles.appLoader,
        'd-flex align-items-center justify-content-center min-vh-100',
      )}>
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    </div>
  );
};

export default AppLoader;
