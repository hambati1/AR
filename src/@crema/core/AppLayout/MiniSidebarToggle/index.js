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

const MiniSidebarToggle = () => {
  const [isCollapsed, setCollapsed] = useState(false);
  const {footer, layoutType, footerType} = useLayoutContext();

  return (
    <div
      className={clsx(
        styles.appLayoutMini,
        footer && footerType === FooterType.FLUID ? '' : '',
        footer && footerType === FooterType.FIXED ? styles.appMainFixedFooter : '',
        layoutType === LayoutType.BOXED ? styles.boxedLayout : '',
        layoutType === LayoutType.FRAMED ? styles.framedLayout : '',
        layoutType === LayoutType.BOXED ? styles.boxedLayout : '',
      isCollapsed ? styles.appLayoutMiniCollapsed : '', )}
    >
      <div className={styles.appLayoutMiniInner}>
      <AppSidebar />
      <div className={styles.appLayoutMiniMain}>
        <AppHeader setCollapsed={setCollapsed} isCollapsed={isCollapsed} />
        <AppScrollbar className={styles.mainMiniScrollbar}>
          <AppContentView />
          <AppFooter />
        </AppScrollbar>
      </div>
      <AppThemeSetting />
      </div>
    </div>
  );
};

export default MiniSidebarToggle;
