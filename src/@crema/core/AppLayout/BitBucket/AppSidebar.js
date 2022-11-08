import React, {useEffect, useState} from 'react';
import styles from './index.module.scss';
import PropTypes from 'prop-types';
import UserInfo from '../components/UserInfo';
import AppScrollbar from '../../AppScrollbar';
import clsx from 'clsx';
import BucketMinibar from './BucketMinibar';
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md';
import AppVerticalMenu from '../components/AppVerticalNav';
import {useLocation} from 'react-router-dom';
import {ThemeDirection} from '../../../../shared/constants/AppEnums';
import {useSidebarContext} from '../../../utility/AppContextProvider/SidebarContextProvider';
import MainSidebar from '../components/MainSidebar';
import {useLayoutContext} from '../../../utility/AppContextProvider/LayoutContextProvider';
import {Offcanvas} from "react-bootstrap";

const AppSidebar = ({visible, onClose}) => {
  const {isSidebarBgImage} = useSidebarContext();
  const {direction} = useLayoutContext();
  const {pathname} = useLocation();

  useEffect(() => {
    onClose();
  }, [pathname]);

  const [isSidebarClosed, setSidebarClosed] = useState(false);

  const onSidebarClosed = () => {
    setSidebarClosed(!isSidebarClosed);
  };

  const sideBarComponent = () => {
    return (
      <MainSidebar
        className={clsx(styles.appBitBucketSidebar, isSidebarBgImage ? styles.bitBucketSidebarImgBackground : '',)}
        collapsible>
        <div className={styles.appBitBucketSidebarInner}>
          <UserInfo hasColor userInfoClass={clsx(styles.crUserInfo, 'border-bottom-0')}/>
          <AppScrollbar
            className={styles.appBitBucketSidebarScrollbar}
            scrollToTop={false}>
            <AppVerticalMenu/>
          </AppScrollbar>
        </div>
      </MainSidebar>
    );
  };

  return (
    <>
      <Offcanvas
        placement={direction === ThemeDirection.LTR ? 'left' : 'right'}
        className={styles.appBitBucketDrawer} show={visible} onHide={onClose}>
        <Offcanvas.Body className='p-0'>
          <div className={styles.appBitBucketSidebarWrapper}>
            <BucketMinibar/>
            {sideBarComponent()}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <div
        className={clsx(styles.appBitBucketSidebarWrapper, isSidebarClosed ? styles.appBitBucketSidebarWrapperClose : '',)}>
        <BucketMinibar/>
        {sideBarComponent()}
        <a className={styles.bitbucketBtn} onClick={onSidebarClosed}>
          {isSidebarClosed ? <MdKeyboardArrowRight/> : <MdKeyboardArrowLeft/>}
        </a>
      </div>
    </>
  );
};

export default AppSidebar;

AppSidebar.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
};
