import React from 'react';
import styles from './index.module.scss';
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
            className={clsx(styles.userMiniHeaderSidebar, isSidebarBgImage ? styles.userMiniHeaderSidebarImgBackground : '',)}>
            <AppScrollbar className={styles.appSidebarUserMiniHeaderScrollbar} scrollToTop={false}>
              <AppVerticalMenu/>
            </AppScrollbar>
          </MainSidebar>
        </Offcanvas.Body>
      </Offcanvas>

      <MainSidebar
        className={clsx(styles.userMiniHeaderSidebar, 'd-none d-xl-flex flex-xl-column', isSidebarBgImage ? styles.userMiniHeaderSidebarImgBackground : '',)}>
        <AppScrollbar className={styles.appSidebarUserMiniHeaderScrollbar} scrollToTop={false}>
          <AppVerticalMenu/>
        </AppScrollbar>
      </MainSidebar>
    </>
  );
};

export default AppSidebar;
