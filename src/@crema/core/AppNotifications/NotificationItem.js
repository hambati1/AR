import React from 'react';

import PropTypes from 'prop-types';
import styles from './NotificationItem.module.scss';
import {Image, ListGroup} from 'react-bootstrap';
import clsx from 'clsx';

const NotificationItem = ({item}) => {
  console.log('item', item);
  return (
    <ListGroup.Item
      className={clsx(
        styles.notifyListItem,
        'd-flex justify-content-start align-items-center border-0',
      )}>
      <Image
        className={styles.notifyMessageAvatar}
        src={item.image}
        alt={item.name}
        roundedCircle
      />
      <div className={clsx(styles.notifyMessageContent, 'flex-grow-1')}>
        <h3>{item.name}</h3>
        <p>{item.message}</p>
      </div>
    </ListGroup.Item>
  );
};

export default NotificationItem;

NotificationItem.propTypes = {
  item: PropTypes.object.isRequired,
};
