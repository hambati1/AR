import React, {useState} from 'react';
import notification from '../../services/db/notifications/notification';

import AppScrollbar from '../AppScrollbar';
import IntlMessages from '../../utility/IntlMessages';
import NotificationItem from './NotificationItem';
import styles from './index.module.scss';
import {IoIosNotificationsOutline} from 'react-icons/io';
import {Button, ListGroup, Offcanvas} from 'react-bootstrap';
import clsx from 'clsx';
import AppIconBtn from '../AppIconBtn';
import messages from '../../services/db/messages/messages';

const AppNotifications = () => {
  const [headerMessageShow, setHeaderMessageShow] = useState(false);

  const onHeaderMessageClose = () => setHeaderMessageShow(false);
  const onHeaderMessageShow = () => setHeaderMessageShow(true);
  return (
    <>
      <span onClick={onHeaderMessageShow}>
        <AppIconBtn className='d-none d-md-flex'>
          <IoIosNotificationsOutline />
        </AppIconBtn>
        <span className={clsx(styles.notifyText, 'd-md-none')}>
          <IntlMessages id='common.notifications' />
        </span>
      </span>

      <Offcanvas className={styles.offcanvaView}
        show={headerMessageShow}
        onHide={onHeaderMessageClose}
        placement='end'>
        <Offcanvas.Header className={styles.offcanvasHeader} closeButton>
          <Offcanvas.Title>
            <IntlMessages id='dashboard.messages' />({messages.length})
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='p-0'>
          <AppScrollbar className={styles.notifyScrollSubmenu}>
            <ListGroup className={clsx(styles.notifyList, 'border-0')}>
              {notification.map((item, index) => (
                <NotificationItem key={index} item={item} />
              ))}
            </ListGroup>
          </AppScrollbar>
          <div
            className={clsx(
              styles.notifyFooterView,
              'd-flex flex-column justify-content-end',
            )}>
            <Button type='primary' className={styles.notifyBtnAll}>
              <IntlMessages id='common.viewAll' />
            </Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default AppNotifications;
