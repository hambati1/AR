import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import clsx from 'clsx';
import {AiOutlineCheck} from 'react-icons/ai';

const CustomColorCell = ({
  themeColorSet,
  sidebarBGColor,
  updateThemeColors,
}) => {
  return (
    <div
      className={styles.colorOptionListItem}
      onClick={() => {
        updateThemeColors(themeColorSet.color);
      }}>
      <div
        style={{backgroundColor: themeColorSet.color}}
        className={styles.customColorOption}>
        {themeColorSet.color === sidebarBGColor ? (
          <span
            className={clsx(
              styles.customColorOptionRightIcon,
              'd-flex align-items-center justify-content-center',
            )}>
            <AiOutlineCheck />
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default CustomColorCell;

CustomColorCell.propTypes = {
  themeColorSet: PropTypes.object,
  sidebarBGColor: PropTypes.string,
  updateThemeColors: PropTypes.func,
};
