import React, {useEffect, useState} from 'react';
import AppHeader from './AppHeader';
import styles from './index.module.scss';
import AppContentView from '@crema/core/AppContentView';
import AppThemeSetting from '../../AppThemeSetting';
import AppFooter from '../components/AppFooter';
import clsx from 'clsx';
import {FooterType, LayoutType} from '../../../../shared/constants/AppEnums';
import AppSidebar from './AppSidebar';
import {useLayoutContext} from '../../../utility/AppContextProvider/LayoutContextProvider';

const HorDefault = () => {
  const [isVisible, setVisible] = useState(false);
  const {footer, footerType, layoutType} = useLayoutContext();

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <div
      className={clsx(
        styles.appLayoutHor,
        footer && footerType === FooterType.FLUID ? '' : '',
        footer && footerType === FooterType.FIXED ? styles.appMainFixedFooter : '',
        layoutType === LayoutType.BOXED ? styles.boxedLayout : '',
        layoutType === LayoutType.FRAMED ? styles.framedLayout : '',)}>
      <div className={styles.appLayoutHorInner}>
        <AppSidebar visible={isVisible} onClose={onClose} />
        <AppHeader showDrawer={showDrawer} />
        <div className={styles.appLayoutHorMain}>
          <div className={styles.container}>
            <AppContentView className={styles.mainContentView} />
            <AppFooter className={styles.appMainFooter} />
          </div>
        </div>
        <AppThemeSetting className={styles.customizerOption} />
      </div>
    </div>
  );
};

export default HorDefault;
