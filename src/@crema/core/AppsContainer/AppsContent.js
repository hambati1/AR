import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import AppScrollbar from '../AppScrollbar';
import styles from './index.module.scss';

const AppsContent = (props) => {
  const {children, isDetailView, fullView} = props;

  return (
    <AppScrollbar
      className={clsx(
        styles.appsContentContainer,
        'd-flex flex-column',
        isDetailView && styles.isDetailView,
        fullView && styles.fullView,
      )}>
      {children}
    </AppScrollbar>
  );
};

export default AppsContent;

AppsContent.defaultProps = {isDetailView: false};

AppsContent.propTypes = {
  children: PropTypes.node,
  isDetailView: PropTypes.bool,
  fullView: PropTypes.bool,
};
