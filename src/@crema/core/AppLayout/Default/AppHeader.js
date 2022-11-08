import React from 'react';
import styles from './index.module.scss';
import AppLogo from '../components/AppLogo';
import AppLanguageSwitcher from '../../AppLanguageSwitcher';
import AppHeaderMessages from '../../AppHeaderMessages';
import AppNotifications from '../../AppNotifications';
import {FiMoreVertical} from 'react-icons/fi';
import {AiOutlineMenu} from 'react-icons/ai';
import {Dropdown} from 'react-bootstrap';
import clsx from 'clsx';
import AppSearch from '../../AppSearchBar';
import {useDispatch} from 'react-redux';
import {toggleNavCollapsed} from '../../../../redux/actions';
import AppIconBtn from "../../AppIconBtn";

const AppHeader = () => {
  const dispatch = useDispatch();

  return (
    <div
      className={clsx(
        styles.appHeader,
        'd-flex align-items-center',
      )}>
      <a
        className={clsx(styles.trigger, 'd-xl-none me-3')}
        onClick={() => dispatch(toggleNavCollapsed())}>
        <AiOutlineMenu />
      </a>
      <div className='me-3'>
        <AppLogo />
      </div>
      <div className='flex-grow-1' />
      <div className={styles.appSearchWrapper}>
        <AppSearch />
      </div>
      <div className='d-none d-md-flex mx-n2'>
        <span className='px-2'>
          <AppLanguageSwitcher />
        </span>
        <span className='px-2'>
          <AppNotifications />
        </span>
        <span className='px-2'>
          <AppHeaderMessages />
        </span>
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
              <FiMoreVertical />
            </AppIconBtn>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">
              <AppHeaderMessages />
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">
              <AppNotifications />
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              <AppLanguageSwitcher />
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default AppHeader;
