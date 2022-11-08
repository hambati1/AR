import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {onSelectUser} from '../../../../../../redux/actions';
import clsx from 'clsx';
import styles from '../../index.module.scss';
import styles2 from '../../UserInfo.module.scss';

const ConnectionItem = (props) => {
  const {item, selectedUser} = props;
  const dispatch = useDispatch();

  return (
    <div
      className={clsx(
        styles.chatListItem,
        'd-flex item-hover',
        (selectedUser && selectedUser.id === item.id) ? 'active' : ''
      )}
      onClick={() => dispatch(onSelectUser(item))}>
      <div className='position-relative'>
        <img className={styles.chatAvatar} src={item.image} />
        <span
          className={clsx(
            styles2.chatUserStatusDot,
            styles2.chatUserStatusDotOnly,
            'position-absolute',
          )}
          style={{
            backgroundColor: item.status === 'online' ? '#389e0d' : '#cf1322',
          }}
        />
      </div>
      <div className={styles.chatListItemContent}>
        <h3>{item.name}</h3>
        <p className='text-truncate mb-0'>@{item.username}</p>
      </div>
    </div>
  );
};

export default ConnectionItem;

ConnectionItem.propTypes = {
  item: PropTypes.object.isRequired,
  selectedUser: PropTypes.object.isRequired,
};
