import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import UserInfo from '../components/UserInfo';
import AppScrollbar from '../../AppScrollbar';
import clsx from 'clsx';
import AppVerticalMenu from '../components/AppVerticalNav';
import {useLocation} from 'react-router-dom';
import {ThemeDirection} from '../../../../shared/constants/AppEnums';
import {useSidebarContext} from '../../../utility/AppContextProvider/SidebarContextProvider';
import {useLayoutContext} from '../../../utility/AppContextProvider/LayoutContextProvider';
import MainSidebar from '../components/MainSidebar';
import {Offcanvas} from "react-bootstrap";
import styles from './index.module.scss';

const AppSidebar = ({visible, onClose}) => {
  const {isSidebarBgImage} = useSidebarContext();
  const {direction} = useLayoutContext();
  const {pathname} = useLocation();

  useEffect(() => {
    onClose();
  }, [pathname]);

  return (
    <Offcanvas
      className={styles.appDrawer}
      show={visible}
      onHide={onClose}>
      <Offcanvas.Body className='p-0'>
          <MainSidebar
            className={clsx(styles.appDrawerLayoutSidebar, isSidebarBgImage ? styles.drawerLayoutSidebarImgBackground : '',)}
          >
            <div className={styles.appDrawerLayoutSidebarInner}>
              <UserInfo hasColor />
              <AppScrollbar
                className={styles.appDrawerLayoutSidebarScrollbar}
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
