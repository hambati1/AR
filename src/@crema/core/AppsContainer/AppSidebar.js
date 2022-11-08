import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import {Card, Offcanvas} from 'react-bootstrap';
import clsx from 'clsx';

const AppSidebar = (props) => {
  const {isAppDrawerOpen, setAppDrawerOpen, sidebarContent} = props;

  return (
    <div
      className={clsx(
        styles.appsSidebar,
        'd-flex flex-column',
      )}>
      <Offcanvas
        className={styles.appsOffcanvas}
        closeIcon={null}
        show={isAppDrawerOpen}
        onHide={() => setAppDrawerOpen(!isAppDrawerOpen)}>
        <Offcanvas.Body className='p-0'>
        {sidebarContent}
        </Offcanvas.Body>
      </Offcanvas>
      <Card className={clsx(styles.card, 'd-none h-100 flex-lg-grow-1 d-lg-flex flex-lg-column')}>
        {sidebarContent}
      </Card>
    </div>
  );
};

export default AppSidebar;
AppSidebar.propTypes = {
  footer: PropTypes.node,
  setAppDrawerOpen: PropTypes.func,
  sidebarContent: PropTypes.node,
  isAppDrawerOpen: PropTypes.bool,
  fullView: PropTypes.bool,
};
