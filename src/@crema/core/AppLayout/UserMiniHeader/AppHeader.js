import React from 'react';
import styles from './index.module.scss';
import {FiMoreVertical} from 'react-icons/fi';
import AppLogo from '../components/AppLogo';
import AppLanguageSwitcher from '../../AppLanguageSwitcher';
import AppHeaderMessages from '../../AppHeaderMessages';
import AppNotifications from '../../AppNotifications';
import AppSearch from "../../AppSearchBar";
import clsx from "clsx";
import AppIconBtn from "../../AppIconBtn";
import {Dropdown} from "react-bootstrap";
import PropTypes from 'prop-types';
import {AiOutlineMenu} from "react-icons/ai";
import UserInfo from "../components/UserInfo";
import {toggleNavCollapsed} from "../../../../redux/actions";
import {useDispatch} from "react-redux";

const AppHeader = ({isCollapsed, setCollapsed}) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.appHeaderUserMiniHeader}>
      <a
        className={clsx(styles.trigger, 'me-3 d-none d-xl-flex')}
        onClick={() => setCollapsed(!isCollapsed)}>
        <AiOutlineMenu />
      </a>
      <a className={clsx(styles.trigger, 'me-3 d-xl-none w-auto')} onClick={() => dispatch(toggleNavCollapsed())}>
        <AiOutlineMenu />
      </a>
      <div className='me-3'>
        <AppLogo/>
      </div>
      <div className='flex-grow-1'/>
      <div className='me-2 me-md-4 d-none d-sm-flex'>
        <AppSearch/>
      </div>
      <div className='d-none d-md-flex mx-n2'>
        <span className='px-2'>
          <AppLanguageSwitcher/>
        </span>
        <span className='px-2'>
          <AppNotifications/>
        </span>
        <span className='px-2'>
          <AppHeaderMessages/>
        </span>
      </div>
      <div className='ms-md-1'>
        <UserInfo userInfoContentClass={styles.userInfoContent} />
      </div>
      <div className='d-md-none'>
        <Dropdown>
          <Dropdown.Toggle
            id='dropdown-custom-components'
            className={clsx(
              styles.dropdownToggleBtn,
              'p-0 bg-transparent border-0 d-flex align-items-center w-100 shadow-none',
            )}>
            <AppIconBtn>
              <FiMoreVertical/>
            </AppIconBtn>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">
              <AppHeaderMessages/>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">
              <AppNotifications/>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              <AppLanguageSwitcher/>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default AppHeader;

AppHeader.propTypes = {
  isCollapsed: PropTypes.bool,
  setCollapsed: PropTypes.func,
};
