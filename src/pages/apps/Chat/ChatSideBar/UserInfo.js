import React from 'react';
import PropTypes from 'prop-types';
import {Dropdown} from 'react-bootstrap';
import {AiOutlineDown} from 'react-icons/ai';
import {BiCheck} from 'react-icons/bi';
import styles from './UserInfo.module.scss';
import clsx from 'clsx';

const UserInfo = ({user, showStatus, showStatusActive}) => {
  const getUserAvatar = () => {
    const name = user.displayName || user.name;
    if (name) {
      return name.charAt(0).toUpperCase();
    }
    if (user.email) {
      return user.email.charAt(0).toUpperCase();
    }
  };

  if (!user) {
    return null;
  }

  const statusActiveMenu = (
    <Dropdown.Menu className='position-relative'>
      <Dropdown.Item key='0' className='active'>
        <BiCheck className={styles.icon} /> Active
      </Dropdown.Item>
      <Dropdown.Item key='1'>
        <BiCheck className={styles.icon} /> Away
      </Dropdown.Item>
      <Dropdown.Item key='2'>
        <BiCheck className={styles.icon} /> Do not distrub
      </Dropdown.Item>
      <Dropdown.Item key='3'>
        <BiCheck className={styles.icon} /> Invisible
      </Dropdown.Item>
    </Dropdown.Menu>
  );

  return (
    <div className='d-flex align-items-center'>
      <div className='position-relative'>
        {user.photoURL || user.image ? (
          <img
            width='45'
            height='45'
            className={clsx(
              styles.chatUserAvatar,
              'd-flex align-items-center justify-content-center',
            )}
            alt='avatar'
            src={user.photoURL || user.image}
          />
        ) : (
          <div
            className={clsx(
              styles.chatUserAvatar,
              'd-flex align-items-center justify-content-center',
            )}>
            {getUserAvatar()}
          </div>
        )}
        {showStatus && (
          <span
            className={clsx(
              styles.chatUserStatusDot,
              styles.chatUserStatusDotOnly,
              'position-absolute',
            )}
            style={{
              backgroundColor: user.status === 'online' ? '#389e0d' : '#cf1322',
            }}
          />
        )}
        {showStatusActive && (
          <span
            className={clsx(
              styles.chatUserStatusDot,
              styles.chatUserStatusDotOnly,
              'position-absolute',
            )}>
            <span
              className={styles.chatUserStatusDot}
              style={{
                backgroundColor:
                  user.status === 'online' ? '#389e0d' : '#cf1322',
              }}
            />
            <Dropdown className='position-relative'>
              <Dropdown.Toggle className={styles.dropDownLink}>
                <AiOutlineDown />
              </Dropdown.Toggle>

              <Dropdown.Menu className={styles.userDropdownMenu}>
                <Dropdown.Item key='0' className='active p-1'>
                  <BiCheck className={styles.icon} /> Active
                </Dropdown.Item>
                <Dropdown.Item key='1' className='p-1'>
                  <BiCheck className={styles.icon} /> Away
                </Dropdown.Item>
                <Dropdown.Item key='2' className='p-1'>
                  <BiCheck className={styles.icon} /> Do not distrub
                </Dropdown.Item>
                <Dropdown.Item key='3' className='p-1'>
                  <BiCheck className={styles.icon} /> Invisible
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </span>
        )}
      </div>
      <div className={styles.chatUserInfoContent}>
        <h3 className={clsx(styles.chatUserName, 'text-truncate')}>
          {user.displayName || user.name
            ? user.displayName || user.name
            : user.email}
        </h3>
        <span className={clsx(styles.chatUserStatusText, 'text-truncate')}>
          {user.status ? user.status : 'Online'}
        </span>
      </div>
    </div>
  );
};

export default UserInfo;

UserInfo.propTypes = {
  user: PropTypes.object.isRequired,
  showStatus: PropTypes.bool,
  showStatusActive: PropTypes.bool,
};
