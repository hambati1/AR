import React from 'react';
import styles from './index.module.scss';
import AppLogo from '../components/AppLogo';
import AppLanguageSwitcher from '../../AppLanguageSwitcher';
import AppHeaderMessages from '../../AppHeaderMessages';
import AppNotifications from '../../AppNotifications';
import {FiMoreVertical} from 'react-icons/fi';
import {AiOutlineMenu} from 'react-icons/ai';
import AppSearch from "../../AppSearchBar";
import {Dropdown} from "react-bootstrap";
import clsx from "clsx";
import AppIconBtn from "../../AppIconBtn";
import {toggleNavCollapsed} from "../../../../redux/actions";
import {useDispatch} from "react-redux";
import UserInfo from "../components/UserInfo";

const AppHeader = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.appUserHeaderHeader}>
      <a className={styles.trigger} onClick={() => dispatch(toggleNavCollapsed())}>
        <AiOutlineMenu />
      </a>
      <AppLogo />
      <div className='flex-grow-1' />
      <div className='me-2 me-md-4 d-none d-sm-flex'>
        <AppSearch />
      </div>
      <div className='d-none d-md-flex mx-n2'>
        {/* <span className='px-2'>
        <AppLanguageSwitcher />
        </span> */}
        <span className='px-2'>
        <AppHeaderMessages />
        </span>
        <span className='px-2'>
        <AppNotifications />
        </span>
      </div>
      <div className='ms-md-1'>
        <UserInfo userInfoContentClass={styles.userInfoContent} />
      </div>
      <div className='d-md-none'>
        
          
      </div>
    </div>
  );
};

export default AppHeader;
