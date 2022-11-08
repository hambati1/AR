import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import clsx from 'clsx';

const AppsFooter = (props) => {
  const {children, className, ...rest} = props;

  return (
    <div
      className={clsx(styles.appsFooter, 'apps-footer', className)}
      {...rest}>
      {children}
    </div>
  );
};

export default AppsFooter;

AppsFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
