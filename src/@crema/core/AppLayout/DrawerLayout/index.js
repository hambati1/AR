import React, {useState} from 'react';
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

const DrawerLayout = () => {
  const [isVisible, setVisible] = useState(false);

  const {footer, layoutType, footerType} = useLayoutContext();

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <div
      className={clsx(styles.appDrawerLayout,
        footer && footerType === FooterType.FLUID ? '' : '',
        footer && footerType === FooterType.FIXED ? styles.appMainFixedFooter : '',
        layoutType === LayoutType.BOXED ? styles.boxedLayout : '',
        layoutType === LayoutType.FRAMED ? styles.framedLayout : '',)}>
      <div className={styles.appDrawerLayoutInner}>
        <AppSidebar visible={isVisible} onClose={onClose} />
        <div className={styles.appDrawerLayoutMain}>
          <AppHeader showDrawer={showDrawer} />
          <AppScrollbar className={styles.drawerLayoutMainScrollbar}>
            <AppContentView />
            <AppFooter className={styles.appFooter} />
          </AppScrollbar>
        </div>
        <AppThemeSetting />
      </div>
    </div>
  );
};

export default React.memo(DrawerLayout);
