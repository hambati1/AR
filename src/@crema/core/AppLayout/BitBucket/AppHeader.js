import React from 'react';
import styles from './index.module.scss';
import AppLogo from '../components/AppLogo';
import PropTypes from 'prop-types';
import {AiOutlineMenu} from 'react-icons/ai';
import AppSearch from "../../AppSearchBar";

const AppHeader = ({showDrawer}) => {

  return (
    <div className={styles.appBitBucketHeader}>
      <a className={styles.trigger} onClick={showDrawer}>
        <AiOutlineMenu/>
      </a>
      <AppLogo/>
      <div className='flex-grow-1'/>
      <div className='me-2 me-md-4'>
        <AppSearch/>
      </div>
    </div>
  );
};

export default AppHeader;

AppHeader.propTypes = {
  showDrawer: PropTypes.func,
};
