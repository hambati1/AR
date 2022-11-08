import React from 'react';
import styles from './index.module.scss';
import {ProgressBar} from 'react-bootstrap';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const GridFooter = ({loading, footerText}) => {
  if (loading) {
    return (
      <div
        className={clsx(
          styles.loaderProgress,
          'd-flex justify-content-center w-100 p-2',
        )}>
        <ProgressBar percent={30} />
        <span>Loading...</span>
      </div>
    );
  } else {
    return (
      <div className={clsx(styles.listFooter, 'd-flex justify-content-center')}>
        <p>{footerText}</p>
      </div>
    );
  }
};

export default GridFooter;

GridFooter.propTypes = {
  loading: PropTypes.bool,
  footerText: PropTypes.string,
};
