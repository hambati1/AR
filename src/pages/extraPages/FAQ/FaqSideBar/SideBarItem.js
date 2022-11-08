import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {ListGroup} from 'react-bootstrap';
import styles from '../index.module.scss';

const SideBarItem = ({item, onGetFaqData, selectionId}) => {
  return (
    <ListGroup.Item
      className={clsx(
        styles.faqSidebarListItem,
        item.id === selectionId ? styles.active : '',
        'd-flex align-items-center justify-content-start border-0',
      )}
      onClick={() => onGetFaqData(item.id)}>
      <span className={clsx(styles.faqSidebarIcon, styles.anticon)}>
        {item.icon}
      </span>
      <p>{item.name}</p>
    </ListGroup.Item>
  );
};

export default SideBarItem;

SideBarItem.propTypes = {
  item: PropTypes.object,
  selectionId: PropTypes.number,
  onGetFaqData: PropTypes.func,
};
