import React from 'react';
import {useHistory} from 'react-router-dom';
import clsx from 'clsx';
import {FaChevronDown} from 'react-icons/fa';
import styles from './index.module.scss';
import {useThemeContext} from '../../../../utility/AppContextProvider/ThemeContextProvider';
import {useAuthMethod, useAuthUser} from '../../../../utility/AuthHooks';
import {useSidebarContext} from '../../../../utility/AppContextProvider/SidebarContextProvider';
import PropTypes from 'prop-types';
import {Dropdown, Image} from 'react-bootstrap';

const UserInfo = ({hasColor, userInfoClass, userInfoContentClass}) => {
  const {themeMode} = useThemeContext();
  const {logout} = useAuthMethod();
  const {user} = useAuthUser();
  const history = useHistory();
  const {sidebarColorSet} = useSidebarContext();
  const {isSidebarBgImage} = useSidebarContext();

  const getUserAvatar = () => {
    if (user.displayName) {
      return user.displayName.charAt(0).toUpperCase();
    }
    if (user.email) {
      return user.email.charAt(0).toUpperCase();
    }
  };

  return (
    <>
      {hasColor ? (
        <div
          style={{
            backgroundColor: isSidebarBgImage
              ? ''
              : sidebarColorSet.sidebarHeaderColor,
            color: sidebarColorSet.sidebarTextColor,
          }}
          className={clsx(
            styles.crUserInfo,
            styles.crUserInfoHasColor,
            'd-flex flex-column justify-content-center bg-transparent',
            {
              light: themeMode === 'light',
            },
            userInfoClass
          )}>
          <Dropdown className='w-100' align='end'>
            <Dropdown.Toggle
              id='dropdown-basic'
              className={clsx(
                styles.dropdownToggleBtn,
                'p-0 bg-transparent border-0 d-flex align-items-center w-100 shadow-none',
              )}>
              {user.photoURL ? (
                <Image
                  className={styles.crUserInfoAvatar}
                  src={user.photoURL}
                  roundedCircle
                />
              ) : (
                <span className={styles.crUserInfoAvatar}>
                  {getUserAvatar()}
                </span>
              )}
              <span className={clsx(styles.crUserInfoContent, userInfoContentClass)}>
                <span className='d-flex align-items-center justify-content-between'>
                  <h3
                    className={clsx(styles.crUserName, 'text-truncate', {
                      light: themeMode === 'light',
                    })}>
                    {user.displayName ? user.displayName : 'admin user '}
                  </h3>
                  <span
                    className={clsx(
                      styles.crUserArrow,
                      'd-flex justify-content-center align-items-center',
                    )}>
                    <FaChevronDown />
                  </span>
                </span>
                {/* <span
                  className={clsx(styles.crUserDesignation, 'text-truncate')}>
                  System Manager
                </span> */}
              </span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => history.push('/extra-pages/user-profile')}>
                My Profile
              </Dropdown.Item>
              <Dropdown.Item onClick={() => logout()}> Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      ) : (
        <div
          className={clsx(
            styles.crUserInfo,
            'd-flex flex-column justify-content-center bg-transparent',
            {
              light: themeMode === 'light',
            },
            userInfoClass
          )}>
          <Dropdown className='w-100' align='end'>
            <Dropdown.Toggle
              id='dropdown-basic'
              className={clsx(
                styles.dropdownToggleBtn,
                'p-0 bg-transparent border-0 d-flex align-items-center w-100 shadow-none',
              )}>
              {user.photoURL ? (
                <Image
                  className={styles.crUserInfoAvatar}
                  src={user.photoURL}
                  roundedCircle
                />
              ) : (
                <span className={styles.crUserInfoAvatar}>
                  {getUserAvatar()}
                </span>
              )}
              <span className={clsx(styles.crUserInfoContent, 'ms-3', userInfoContentClass)}>
                <span className='d-flex align-items-center justify-content-between'>
                  <h3
                    className={clsx(styles.crUserName, 'text-truncate', {
                      light: themeMode === 'light',
                    })}>
                    {user.displayName ? user.displayName : 'admin user '}
                  </h3>
                  <span
                    className={clsx(
                      styles.crUserArrow,
                      'd-flex justify-content-center align-items-center',
                    )}>
                    <FaChevronDown />
                  </span>
                </span>
                {/* <span
                  className={clsx(styles.crUserDesignation, 'text-truncate')}>
                  System Manager
                </span> */}
              </span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => history.push('/extra-pages/user-profile')}>
                My Profile
              </Dropdown.Item>
              <Dropdown.Item onClick={() => logout()}> Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      )}
    </>
  );
};

export default UserInfo;

UserInfo.propTypes = {
  hasColor: PropTypes.bool,
  userInfoClass: PropTypes.string,
  userInfoContentClass: PropTypes.string,
};
