import React from 'react';
import styles from './index.module.scss';
import AppLogo from '../components/AppLogo';
import AppLanguageSwitcher from '../../AppLanguageSwitcher';
import AppHeaderMessages from '../../AppHeaderMessages';
import AppNotifications from '../../AppNotifications';
import PropTypes from 'prop-types';
import {FiMoreVertical} from 'react-icons/fi';
import {AiOutlineMenu} from 'react-icons/ai';
import AppSearch from "../../AppSearchBar";
import {Dropdown} from "react-bootstrap";
import clsx from "clsx";
import AppIconBtn from "../../AppIconBtn";

const AppHeader = ({showDrawer}) => {

  return (
    <div className={styles.appDrawerLayoutHeader}>
     header
    </div>
  );
};

export default AppHeader;

AppHeader.propTypes = {
  showDrawer: PropTypes.func,
};
