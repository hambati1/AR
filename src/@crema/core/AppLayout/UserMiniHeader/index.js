import React, {useState} from 'react';
import AppSidebar from './AppSidebar';
import AppHeader from './AppHeader';
import styles from './index.module.scss';
import AppContentView from '@crema/core/AppContentView';
import AppScrollbar from '../../AppScrollbar';
import AppThemeSetting from '../../AppThemeSetting';
import clsx from 'clsx';
import {FooterType, LayoutType} from '../../../../shared/constants/AppEnums';
import AppFooter from '../components/AppFooter';
import {useLayoutContext} from '../../../utility/AppContextProvider/LayoutContextProvider';

const UserMiniHeader = () => {
  const [isCollapsed, setCollapsed] = useState(true);
  const {footer, layoutType, footerType} = useLayoutContext();

  return (
    <div
      className={clsx(
        styles.appLayoutUserMiniHeader,
        footer && footerType === FooterType.FLUID ? '' : '',
        footer && footerType === FooterType.FIXED ? styles.appMainFixedFooter : '',
        layoutType === LayoutType.BOXED ? styles.boxedLayout : '',
        layoutType === LayoutType.FRAMED ? styles.framedLayout : '',
      isCollapsed ? styles.appLayoutUserMiniHeaderCollapsed : '', )}
    >
      <div className={styles.appLayoutUserMiniHeaderInner}>
        <AppSidebar />
        <div className={styles.appLayoutUserMiniHeaderMain}>
          <AppHeader setCollapsed={setCollapsed} isCollapsed={isCollapsed} />
          <AppScrollbar className={styles.mainUserMiniHeaderScrollbar}>
            <AppContentView />
            <AppFooter className={styles.appFooter} />
          </AppScrollbar>
        </div>
        <AppThemeSetting />
      </div>
    </div>
  );
};

export default UserMiniHeader;
