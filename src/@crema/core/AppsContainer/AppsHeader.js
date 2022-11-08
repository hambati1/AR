import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import clsx from 'clsx';

const AppsHeader = ({children}) => {
  return (
    <div
      className={clsx(
        styles.appsHeader,
        'apps-header d-flex align-items-center',
      )}>
      {children}
    </div>
  );
};

export default AppsHeader;
AppsHeader.defaultProps = {};

AppsHeader.propTypes = {
  children: PropTypes.node,
};
