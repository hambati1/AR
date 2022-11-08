import React from 'react';
import AppSidebar from './AppSidebar';
import AppHeader from './AppHeader';
import styles from './index.module.scss';
import AppContentView from '@crema/core/AppContentView';
import AppThemeSetting from '../../AppThemeSetting';
import AppFooter from '../components/AppFooter';
import AppScrollbar from '../../AppScrollbar';
import clsx from 'clsx';
import {FooterType, LayoutType} from '../../../../shared/constants/AppEnums';
import {useLayoutContext} from '../../../utility/AppContextProvider/LayoutContextProvider';


const UserHeader = () => {
  const {footer, layoutType, footerType} = useLayoutContext();

  return (
    <div
      className={clsx(
        styles.appLayoutUserHeader,
        footer && footerType === FooterType.FLUID ? '' : '',
        footer && footerType === FooterType.FIXED ? styles.appMainFixedFooter : '',
        layoutType === LayoutType.BOXED ? styles.boxedLayout : '',
        layoutType === LayoutType.FRAMED ? styles.framedLayout : '',)}>
      <div className={styles.appLayoutUserHeaderInner}>
        <AppHeader/>
        <div className={styles.appLayoutUserHeaderRow}>
          <AppSidebar/>
          <div className={styles.appLayoutUserHeaderMain}>
            <AppScrollbar className={styles.userHeaderMainScrollbar}>
              <AppContentView/>
              <AppFooter className={styles.appMainFooter}/>
            </AppScrollbar>
          </div>
        </div>
        <AppThemeSetting/>
      </div>
    </div>
  );
};

export default React.memo(UserHeader);
