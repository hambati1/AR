import React from 'react';
import styles from './index.module.scss';
import {FiMoreVertical} from 'react-icons/fi';
import AppLanguageSwitcher from '../../AppLanguageSwitcher';
import AppHeaderMessages from '../../AppHeaderMessages';
import AppNotifications from '../../AppNotifications';
import NotificationBar from './NotificationBar';
import {AiOutlineMenu} from 'react-icons/ai';
import PropTypes from 'prop-types';
import AppHorizontalNav from '../components/AppHorizontalNav';
import AppLogo from '../components/AppLogo';
import UserInfo from '../components/UserInfo';
import {useSidebarContext} from '../../../utility/AppContextProvider/SidebarContextProvider';
import AppSearch from "../../AppSearchBar";
import {Dropdown} from "react-bootstrap";
import clsx from "clsx";
import AppIconBtn from "../../AppIconBtn";

const AppHeader = ({showDrawer}) => {

  const {sidebarColorSet} = useSidebarContext();

  return (
    <div
      className={styles.appHeaderHorDark}
      style={{
        backgroundColor: sidebarColorSet.sidebarBgColor,
        color: sidebarColorSet.sidebarTextColor,
      }}>
      <NotificationBar />

      <div
        className={styles.headerHorDarkMain}
        style={{
          backgroundColor: sidebarColorSet.sidebarBgColor,
          color: sidebarColorSet.sidebarTextColor,
        }}>
        <div className={styles.container}>
          <div className={styles.headerHorDarkMainFlex}>
            <a className={styles.trigger} onClick={showDrawer}>
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
            <UserInfo userInfoContentClass={styles.userInfoContent} userInfoClass='border-bottom-0' />
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
        </div>
      </div>

      <div
        className={styles.headerNavHorDark}
        style={{
          backgroundColor: sidebarColorSet.sidebarBgColor,
          color: sidebarColorSet.sidebarTextColor,
        }}>
        <div className={styles.container}>
          <AppHorizontalNav className={styles.appMainHorDarkMenu} />
        </div>
      </div>
    </div>
  );
};

export default AppHeader;

AppHeader.propTypes = {
  showDrawer: PropTypes.func,
};
