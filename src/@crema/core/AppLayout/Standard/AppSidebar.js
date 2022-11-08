import React from 'react';
import styles from './index.module.scss';
import UserInfo from '../components/UserInfo';
import AppScrollbar from '../../AppScrollbar';
import clsx from 'clsx';
import AppVerticalMenu from '../components/AppVerticalNav';
import {useSidebarContext} from '../../../utility/AppContextProvider/SidebarContextProvider';
import MainSidebar from '../components/MainSidebar';
import {Offcanvas} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {toggleNavCollapsed} from "../../../../redux/actions";

const AppSidebar = () => {
  const {isSidebarBgImage} = useSidebarContext();
  const dispatch = useDispatch();
  const navCollapsed = useSelector(({settings}) => settings.navCollapsed);

  const handleToggleDrawer = () => {
    dispatch(toggleNavCollapsed());
  };

  return (
    <>
      <Offcanvas
        className='d-xl-none w-auto'
        show={navCollapsed}
        onHide={() => handleToggleDrawer()}>
        <Offcanvas.Body className='p-0'>
          <MainSidebar
            className={clsx(styles.appStandardSidebar, isSidebarBgImage ? styles.standardSidebarImgBackground : '',)}
          >
            <div className={styles.appStandardSidebarInner}>
              <UserInfo hasColor/>
              <AppScrollbar
                className={styles.appStandardSidebarScrollbar}
                scrollToTop={false}>
                <AppVerticalMenu/>
              </AppScrollbar>
            </div>
          </MainSidebar>
        </Offcanvas.Body>
      </Offcanvas>
      <MainSidebar
        className={clsx(styles.appStandardSidebar, 'd-none d-xl-flex flex-xl-column', isSidebarBgImage ? styles.standardSidebarImgBackground : '',)}
      >
        <div className={styles.appStandardSidebarInner}>
        <UserInfo hasColor userInfoClass='border-0'/>
        <AppScrollbar
          className={styles.appStandardSidebarScrollbar}
          scrollToTop={false}>
          <AppVerticalMenu/>
        </AppScrollbar>
        </div>
      </MainSidebar>
    </>
  );
};

export default AppSidebar;
