import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import AppIconBtn from '../AppIconBtn';
import {AiOutlineStar, AiFillStar} from 'react-icons/ai';

const AppsStarredIcon = ({item, title, smallBtn, onChange}) => {
  return (
    <AppIconBtn
      smallBtn={smallBtn}
      title={title}
      onClick={(e) => onChange(!item.isStarred, item, e)}
    >
      {
        <span className={styles.starIcon}>
          {item.isStarred ? (
            <AiFillStar />
          ) : (
            <AiOutlineStar />
          )}
        </span>
      }
    </AppIconBtn>
  );
};

export default AppsStarredIcon;

AppsStarredIcon.propTypes = {
  item: PropTypes.object,
  onChange: PropTypes.func,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  smallBtn: PropTypes.bool,
};
