import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {MessageType} from '@crema/services/db/apps/chat/connectionList';
import {getFileSize} from '@crema/utility/Utils';
import styles from './MessageItem.module.scss';
import AppMediaViewer from '@crema/core/AppMedialViewer';
import clsx from 'clsx';
import {FiPlayCircle} from 'react-icons/fi';
import {AiOutlineFileText, AiOutlineEdit} from 'react-icons/ai';
import {Image} from 'react-bootstrap-icons';

const showMediaItems = 2;
const getMediaMessage = (item) => {
  if (item.mime_type.startsWith('image')) {
    return (
      <div className={styles.mediaImg}>
        <img alt='' src={item.url} />
      </div>
    );
  } else if (item.mime_type.startsWith('video')) {
    return (
      <div
        className={clsx(
          styles.mediaVideo,
          'position-relative overflow-hidden',
        )}>
        <video src={item.url} />
        <FiPlayCircle
          className={clsx(styles.mediaVideoIcon, 'position-absolute')}
        />
      </div>
    );
  } else {
    return (
      <div className={clsx(styles.mediaAttach, 'd-flex flex-nowrap')}>
        <AiOutlineFileText />
        <p>
          <span>{item.file_name}</span>
          <span>{getFileSize(item.file_size)}</span>
        </p>
      </div>
    );
  }
};
const getMessage = (item, setIndex) => {
  if (item.message_type === MessageType.TEXT) {
    return <p className='m-0'>{item.message}</p>;
  } else {
    return (
      <div className='d-inline-block overflow-hidden position-relative align-middle'>
        <div className='d-flex flex-wrap m-n1'>
          {item.media.slice(0, showMediaItems).map((data, index) => (
            <div
              key={'media-' + data.id}
              className='p-1 pointer'
              onClick={() => setIndex(index)}>
              {getMediaMessage(data)}
            </div>
          ))}
          {item.media.length > showMediaItems ? (
            <div
              className='p-1 pointer'
              onClick={() => setIndex(showMediaItems)}>
              <div
                className={clsx(
                  styles.mediaCounter,
                  'd-flex flex-column align-items-center justify-content-center',
                )}>
                +{item.media.length - showMediaItems}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
};

const ReceiverMessageItem = ({
  selectedUser,
  isPreviousSender = false,
  isLast,
  item,
}) => {
  const [index, setIndex] = useState(-1);

  const onClose = () => {
    setIndex(-1);
  };

  return (
    <div
      className={clsx(
        styles.chatMessageListItem,
        styles.left,
        'd-flex',
        isPreviousSender ? styles.hideUserInfo : 'first-chat-message',
        isLast ? styles.lastChatMessage : '',
      )}>
      <div className={styles.messageChatView}>
        {isPreviousSender ? null : selectedUser.image ? (
          <img className={styles.messageChatAvatar} src={selectedUser.image} />
        ) : (
          <div className={styles.messageChatAvatar}>
            {selectedUser.name.charAt(0).toUpperCase()}
          </div>
        )}

        <div className={styles.messageChatItem}>
          <span className={styles.messageTime}>{item.time}</span>
          <div className={styles.messageChat}>
            {getMessage(item, setIndex)}

            {item.edited && (
              <span className={styles.messageInfoEdit}>
                <AiOutlineEdit />
              </span>
            )}
          </div>
        </div>
      </div>
      <AppMediaViewer index={index} medias={item.media} onClose={onClose} />
    </div>
  );
};

export default ReceiverMessageItem;

ReceiverMessageItem.defaultProps = {};

ReceiverMessageItem.propTypes = {
  selectedUser: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
  isPreviousSender: PropTypes.bool,
  isLast: PropTypes.bool,
};
