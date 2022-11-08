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

const BitBucket = () => {
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
      className={clsx(styles.appBitBucketLayout,
        footer && footerType === FooterType.FIXED ? styles.appMainFixedFooter : '',
        layoutType === LayoutType.BOXED ? styles.boxedLayout : '',
        layoutType === LayoutType.FRAMED ? styles.framedLayout : '',)}>
      <div className={styles.appBitBucketLayoutInner}>
        <AppSidebar visible={isVisible} onClose={onClose} />
        <div className={styles.appBitBucketLayoutMain}>
          <AppHeader showDrawer={showDrawer} />
          <AppScrollbar className={styles.bitBucketMainScrollbar}>
            <AppContentView />
            <AppFooter className={styles.appMainFooter} />
          </AppScrollbar>
        </div>
        <AppThemeSetting />
      </div>
    </div>
  );
};

export default React.memo(BitBucket);
