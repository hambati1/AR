import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './index.module.scss';
import {AiOutlineCheck} from 'react-icons/ai';

const AppSelectedIcon = ({backgroundColor, isCenter = true, color}) => {
  return (
    <div
      className={clsx(
        styles.appSelectedIcon,
        'app-selected-icon d-flex align-items-center justify-content-center',
        {isCenter: isCenter},
      )}
      style={{
        backgroundColor: backgroundColor || '#333333',
        color: color || '#FFFFFF',
      }}>
      <AiOutlineCheck />
    </div>
  );
};

export default AppSelectedIcon;

AppSelectedIcon.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  isCenter: PropTypes.bool,
};
