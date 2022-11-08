import React, {useState} from 'react';
import messages from '../../services/db/messages/messages';
import MessageItem from './MessageItem';
import IntlMessages from '../../utility/IntlMessages';

import AppScrollbar from '../AppScrollbar';
import styles from './index.module.scss';
import {AiOutlineMail} from 'react-icons/ai';
import {Button, ListGroup, Offcanvas} from 'react-bootstrap';
import AppIconBtn from '../AppIconBtn';
import clsx from 'clsx';

const AppHeaderMessages = () => {
  const [headerMessageShow, setHeaderMessageShow] = useState(false);

  const onHeaderMessageClose = () => setHeaderMessageShow(false);
  const onHeaderMessageShow = () => setHeaderMessageShow(true);

  return (
    <>
      <span onClick={onHeaderMessageShow}>
        <AppIconBtn className='d-none d-md-flex'>
          <AiOutlineMail />
        </AppIconBtn>
        <span className={clsx(styles.headerMessageText, 'd-md-none')}>
          <IntlMessages id='dashboard.messages' />
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
          <AppScrollbar className={styles.headerMessageScrollSubmenu}>
            <ListGroup className={styles.headerMessageList}>
              {messages.map((item) => (
                <MessageItem key={item.id} item={item} />
              ))}
            </ListGroup>
          </AppScrollbar>
          <div
            className={clsx(
              styles.headerMessageFooterView,
              'd-flex flex-column justify-content-end',
            )}>
            <Button className={styles.headerMessageBtn} type='primary'>
              <IntlMessages id='common.viewAll' />
            </Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default AppHeaderMessages;
