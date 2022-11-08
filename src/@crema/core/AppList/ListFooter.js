import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import {ProgressBar} from 'react-bootstrap';
import clsx from 'clsx';

const ListFooter = ({loading, footerText}) => {
  return loading ? (
    <div
      className={clsx(
        styles.loaderProgress,
        'd-flex align-items-center w-100 p-2',
      )}>
      <ProgressBar percent={30} />
      <span>Loading...</span>
    </div>
  ) : (
    <div className={clsx(styles.listFooter, 'd-flex align-items-center')}>
      <p>{footerText}</p>
    </div>
  );
};

export default ListFooter;

ListFooter.propTypes = {
  loading: PropTypes.bool,
  footerText: PropTypes.string,
};

ListFooter.defaultProps = {
  loading: false,
};
