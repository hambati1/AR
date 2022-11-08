import React, {useEffect} from 'react';
import styles from './index.module.scss';
import PropTypes from 'prop-types';
import {useLocation} from 'react-router-dom';
import UserInfo from '../components/UserInfo';
import AppScrollbar from '../../AppScrollbar';
import clsx from 'clsx';
import AppVerticalMenu from '../components/AppVerticalNav';

import {useSidebarContext} from '../../../utility/AppContextProvider/SidebarContextProvider';

import MainSidebar from '../components/MainSidebar';
import {Offcanvas} from "react-bootstrap";

const AppSidebar = ({visible, onClose}) => {
  const {isSidebarBgImage} = useSidebarContext();

  const {pathname} = useLocation();

  useEffect(() => {
    onClose();
  }, [pathname]);

  return (

    <Offcanvas show={visible} onHide={onClose}
               className={styles.appHorHeaderFixedDrawer}>
      <Offcanvas.Body>
        <MainSidebar
          className={clsx(
            styles.appMainHorHeaderFixedSidebar,
            isSidebarBgImage ? styles.horHeaderFixedSidebarImgBackground : '', )}
          collapsible>
          <div className={styles.appMainHorHeaderFixedSidebarInner}>
            <UserInfo />
            <AppScrollbar
              className={styles.appSidebarHorHeaderFixedScrollbar}
              scrollToTop={false}>
              <AppVerticalMenu />
            </AppScrollbar>
          </div>
        </MainSidebar>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default AppSidebar;

AppSidebar.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
};
