import React from 'react';
import {IoChatboxOutline, IoLanguageOutline} from 'react-icons/io5';
import {AiOutlineSearch} from 'react-icons/ai';
import {FiSettings} from 'react-icons/fi';
import {IoIosNotificationsOutline} from 'react-icons/io';
import {useSidebarContext} from '../../../utility/AppContextProvider/SidebarContextProvider';
import clsx from 'clsx';
import {useThemeContext} from '../../../utility/AppContextProvider/ThemeContextProvider';
import styles from './index.module.scss'

const BucketMinibar = () => {
  const {sidebarColorSet} = useSidebarContext();
  const {themeMode} = useThemeContext();
  return (
    <div
      className={clsx(styles.bucketMinibar, themeMode === 'dark' ? styles.dark : '')}
      style={{
        backgroundColor: sidebarColorSet.sidebarBgColor,
        color: sidebarColorSet.sidebarTextColor,
      }}>
      <div className={styles.bucketMinibarInner}>
        <a className={styles.bucketMinibarLogo} onClick={(e) => e.preventDefault()}>
          <img
            src={
              sidebarColorSet.mode === 'dark'
                ? '/assets/images/logo-white.png'
                : '/assets/images/logo.png'
            }
            alt='crema-logo'
          />
        </a>

        <div className={styles.bucketMinibarScrollbar}>
          <div className={styles.bucketMinibarMain}>
            <a
              className={styles.bucketMinibarLink}
              onClick={(e) => e.preventDefault()}>
              <AiOutlineSearch />
            </a>

            <div className={styles.bucketMinibarLang}>
              <a
                className={styles.bucketMinibarLink}
                onClick={(e) => e.preventDefault()}>
                <IoLanguageOutline />
              </a>
            </div>

            <a
              className={styles.bucketMinibarLink}
              onClick={(e) => e.preventDefault()}>
              <IoChatboxOutline />
            </a>
            <a
              className={clsx(styles.bucketMinibarLink, styles.bucketMinibarNotifyLink)}
              onClick={(e) => e.preventDefault()}>
              <IoIosNotificationsOutline />
            </a>
          </div>
          <div className={styles.bucketMinibarSetting}>
            <a
              className={styles.bucketMinibarLink}
              onClick={(e) => e.preventDefault()}>
              <FiSettings />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BucketMinibar;
