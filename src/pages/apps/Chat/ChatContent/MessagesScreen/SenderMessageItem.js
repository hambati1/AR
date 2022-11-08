import React, {useState} from 'react';
import PropTypes from 'prop-types';
import IntlMessages from '@crema/utility/IntlMessages';
import {MessageType} from '@crema/services/db/apps/chat/connectionList';
import {getFileSize} from '@crema/utility/Utils';
import {Dropdown} from 'react-bootstrap';
import styles from './MessageItem.module.scss';
import AppMediaViewer from '@crema/core/AppMedialViewer';
import clsx from 'clsx';
import {MdOutlineModeEditOutline} from 'react-icons/md';
import {AiOutlineFileText, AiOutlineMore} from 'react-icons/ai';
import {FiPlayCircle} from 'react-icons/fi';
import {Image} from 'react-bootstrap';

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
    return <p className='mb-0 d-inline-block'>{item.message}</p>;
  } else {
    return (
      //.chat-media-wrapper {
      //  padding: 4px;
      //  cursor: pointer;
      //}
      //
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
const SenderMessageItem = ({
  authUser,
  item,
  onClickEditMessage,
  isPreviousSender = false,
  deleteMessage,
  isLast,
}) => {
  const [index, setIndex] = useState(-1);
  const getUserAvatar = () => {
    const name = authUser.displayName;
    if (name) {
      return name.charAt(0).toUpperCase();
    }
    if (authUser.email) {
      return authUser.email.charAt(0).toUpperCase();
    }
  };

  const onClose = () => {
    setIndex(-1);
  };
  const menuSend = (
    <Dropdown.Menu>
      {item.message_type === MessageType.TEXT ? (
        <Dropdown.Item
          onClick={() => {
            onClickEditMessage(item);
          }}>
          <IntlMessages id='common.edit' />
        </Dropdown.Item>
      ) : null}
      <Dropdown.Item
        onClick={() => {
          deleteMessage(item.id);
        }}>
        <IntlMessages id='common.delete' />
      </Dropdown.Item>
    </Dropdown.Menu>
  );

  return (
    <div
      className={clsx(
        styles.chatMessageListItem,
        styles.right,
        'd-flex justify-content-end',
        isPreviousSender ? styles.hideUserInfo : 'first-chat-message',
        isLast ? styles.lastChatMessage : '',
      )}>
      <div className={styles.messageChatView}>
        <div className={styles.messageChatItem}>
          <span className={styles.messageTime}>{item.time}</span>
          <div className={styles.messageChat}>
            {getMessage(item, setIndex)}

            {item.edited && (
              <span className={styles.messageInfoEdit}>
                <MdOutlineModeEditOutline />
              </span>
            )}
          </div>
        </div>
        <div
          className={clsx(
            styles.messageChatSender,
            'd-flex align-items-start',
          )}>
          {authUser.photoURL ? (
            <Image
              roundedCircle
              size={34}
              className={styles.messageChatAvatar}
              src={authUser.photoURL}
            />
          ) : (
            <div className={styles.messageChatAvatar}>
              {getUserAvatar()}
            </div>
          )}
          <Dropdown overlay={menuSend} trigger={['click']}>
            <a className={styles.messageMoreDropdownLink}>
              <AiOutlineMore />
            </a>
          </Dropdown>
        </div>
      </div>

      <AppMediaViewer index={index} medias={item.media} onClose={onClose} />
    </div>
  );
};

export default SenderMessageItem;

SenderMessageItem.defaultProps = {};

SenderMessageItem.propTypes = {
  authUser: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
  isPreviousSender: PropTypes.bool,
  isLast: PropTypes.bool,
  onClickEditMessage: PropTypes.func,
  deleteMessage: PropTypes.func,
};
