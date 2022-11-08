import React from 'react';

import PropTypes from 'prop-types';
import styles from './MessageItem.module.scss';
import {Image, ListGroup} from 'react-bootstrap';
import clsx from 'clsx';

const MessageItem = (props) => {
  const {item} = props;

  return (
    <ListGroup.Item
      className={clsx(
        styles.messageListItem,
        'd-flex justify-content-start align-items-center border-bottom-0',
      )}>
      <Image className={styles.messageAvatar} src={item.image} roundedCircle />
      <div className={clsx(styles.messageListItemContent, 'flex-grow-1')}>
        <h3>{item.name}</h3>
        <p>{item.message}</p>
      </div>
    </ListGroup.Item>
  );
};

export default MessageItem;

MessageItem.propTypes = {
  item: PropTypes.object.isRequired,
};
