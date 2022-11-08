import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import {FaRegCheckCircle, FaRegEnvelope, FaRegEnvelopeOpen, FaRegStar} from 'react-icons/fa';
import {BiArchiveIn, BiCalendarMinus, BiUser, } from 'react-icons/bi';
import {AiOutlineDelete, AiOutlineSchedule, AiOutlineUnorderedList} from 'react-icons/ai';
import {FiInfo, FiRefreshCw} from 'react-icons/fi';

import styles from './index.module.scss';
import {HiOutlineRefresh} from 'react-icons/hi';

const getIconByName = (iconName) => {
  switch (iconName) {
    case 'check-circle':
      return <FaRegCheckCircle />;
    case 'envelope':
      return <FaRegEnvelope />;
    case 'star':
      return <FaRegStar />;
    case 'calendar-minus':
      return <BiCalendarMinus />;
    case 'user':
      return <BiUser />;
    case 'clock':
      return <AiOutlineSchedule />;
    case 'envelope-open':
      return <FaRegEnvelopeOpen />;
    case 'trash-alt':
      return <AiOutlineDelete />;
    case 'file-archive':
      return <BiArchiveIn />;
    case 'question-circle':
      return <FiInfo />;
    case 'clone':
      return <FiRefreshCw />;
    case 'all':
      return <AiOutlineUnorderedList />;
    case 'frequent':
      return <HiOutlineRefresh />;
  }
};

const AppsSideBarFolderItem = ({item, path}) => {
  return (
    <div key={item.id} className={styles.listItem}>
      <NavLink to={path}>
        <span className={styles.listItemIcon}>{getIconByName(item.icon)}</span>
        <span className={styles.listItemText}>{item.name}</span>
      </NavLink>
    </div>
  );
};

export default AppsSideBarFolderItem;

AppsSideBarFolderItem.propTypes = {
  item: PropTypes.object,
  path: PropTypes.string,
};
