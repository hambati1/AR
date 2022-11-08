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


const Default = () => {
  const {footer, layoutType, footerType} = useLayoutContext();

  return (
    <div
      className={clsx(
        styles.appLayout,
        footer && footerType === FooterType.FIXED ? styles.appMainFixedFooter : '',
        layoutType === LayoutType.BOXED ? styles.boxedLayout : '',
        layoutType === LayoutType.FRAMED ? styles.framedLayout : '',
        )}>
      <div className={styles.appDefaultLayout}>
        <AppSidebar />
        <div className={styles.appLayoutMain}>
          <AppHeader />
          <AppScrollbar className={styles.mainContentScroll}>
            <AppContentView />
            <AppFooter className={styles.appFooter} />
          </AppScrollbar>
        </div>
        <AppThemeSetting />
      </div>
    </div>
  );
};

export default React.memo(Default);
