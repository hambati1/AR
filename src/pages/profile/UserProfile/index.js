import React from 'react';
import styles from './index.module.scss';
import {Nav, Tab} from 'react-bootstrap';
import PersonalInfo from './PersonalInfo';
import ChangePassword from './ChangePassword';
import Information from './Information';
import Notification from './Notification';
import SocialLink from './SocialLink';

import {HiUser} from 'react-icons/hi';
import {AiFillLock} from 'react-icons/ai';
import {FaBandcamp, FaNetworkWired} from 'react-icons/fa';
import {IoMdNotifications} from 'react-icons/io';
import accountData from '@crema/services/db/extraPages/account';
import IntlMessages from '@crema/utility/IntlMessages';
import clsx from 'clsx';

const UserProfile = () => {
  return (
    <Tab.Container id='left-tabs-example' defaultActiveKey='1'>
      <div className={styles.userTabContainer}>
        <Nav
          variant='pills'
          className={clsx(styles.userProfileTabs, 'flex-column')}>
          <Nav.Item className={styles.navItem}>
            <Nav.Link eventKey='1' className={styles.navItemLink}>
                <span
                  className={clsx(
                    styles.userProfileIcon,
                    'd-flex align-items-center',
                  )}>
                  <HiUser className={styles.icon}/>
                  <span>
                    <IntlMessages id='userProfile.personalInfo'/>
                  </span>
                </span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className={styles.navItem}>
            <Nav.Link eventKey='2' className={styles.navItemLink}>
              {' '}
              <span
                className={clsx(
                  styles.userProfileIcon,
                  'd-flex align-items-center',
                )}>
                  <AiFillLock className={styles.icon}/>
                  <span>
                    <IntlMessages id='userProfile.changePassword'/>
                  </span>
                </span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className={styles.navItem}>
            <Nav.Link eventKey='3' className={styles.navItemLink}>
                <span
                  className={clsx(
                    styles.userProfileIcon,
                    'd-flex align-items-center',
                  )}>
                  <FaBandcamp className={styles.icon}/>
                  <span>
                    <IntlMessages id='userProfile.information'/>
                  </span>
                </span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className={styles.navItem}>
            <Nav.Link eventKey='4' className={styles.navItemLink}>
                <span
                  className={clsx(
                    styles.userProfileIcon,
                    'd-flex align-items-center',
                  )}>
                  <FaNetworkWired className={styles.icon}/>
                  <span>
                    <IntlMessages id='userProfile.social'/>
                  </span>
                </span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className={styles.navItem}>
            <Nav.Link eventKey='5' className={styles.navItemLink}>
                <span
                  className={clsx(
                    styles.userProfileIcon,
                    'd-flex align-items-center',
                  )}>
                  <IoMdNotifications className={styles.icon}/>
                  <span>
                    <IntlMessages id='userProfile.notification'/>
                  </span>
                </span>
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className='user-tab-content'>
          <Tab.Pane eventKey='1'>
            <PersonalInfo/>
          </Tab.Pane>
          <Tab.Pane eventKey='2'>
            <ChangePassword/>
          </Tab.Pane>
          <Tab.Pane eventKey='3'>
            <Information/>
          </Tab.Pane>
          <Tab.Pane eventKey='4'>
            <SocialLink socialLink={accountData.member}/>
          </Tab.Pane>
          <Tab.Pane eventKey='5'>
            <Notification notification={accountData.notification}/>
          </Tab.Pane>
        </Tab.Content>
      </div>
    </Tab.Container>
  );
};

export default UserProfile;
