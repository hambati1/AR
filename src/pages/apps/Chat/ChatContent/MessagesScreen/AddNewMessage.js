import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import {AiOutlinePaperClip, AiOutlineSend} from 'react-icons/ai';
import PropTypes from 'prop-types';
import {useIntl} from 'react-intl';
import {MessageType} from '@crema/services/db/apps/chat/connectionList';
import {Button, Form} from 'react-bootstrap';
import {generateUniqueID} from '@crema/utility/Utils';
import clsx from 'clsx';
import styles from '../index.module.scss';

const AddNewMessage = ({
  sendFileMessage,
  onSendMessage,
  currentMessage = '',
}) => {
  const [message, setMessage] = useState(currentMessage);
  const {getRootProps, getInputProps} = useDropzone({
    multiple: true,
    onDrop: (acceptedFiles) => {
      sendFileMessage({
        message: '',
        message_type: MessageType.MEDIA,
        media: acceptedFiles.map((file) => {
          return {
            id: generateUniqueID(),
            url: URL.createObjectURL(file),
            mime_type: file.type,
            file_name: file.name,
            file_size: file.size,
          };
        }),
      });
    },
  });

  useEffect(() => {
    setMessage(currentMessage);
  }, [currentMessage]);

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      onClickSendMessage();
    }
  };

  const onClickSendMessage = () => {
    if (message) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const {messages} = useIntl();

  return (
    <div className='d-flex'>
      <div
        className={clsx(
          styles.addNewMessageAction,
          styles.addNewMessageActionFirst,
          'd-flex flex-row align-items-center',
        )}>
        {message === '' ? (
          <Button
            {...getRootProps({
              className: styles.messageBtn,
            })}>
            <input {...getInputProps()} />
            <AiOutlinePaperClip className='d-block' />
          </Button>
        ) : null}
      </div>
      <Form.Control
        placeholder={messages['chatApp.sendMessagePlaceholder']}
        value={message}
        onChange={(event) => {
          if (event.target.value !== '\n') setMessage(event.target.value);
        }}
        onKeyPress={onKeyPress}
      />

      <div
        className={clsx(
          styles.addNewMessageAction,
          'd-flex flex-row align-items-center',
        )}>
        <Button className={styles.messageBtn} onClick={onClickSendMessage}>
          <AiOutlineSend className='d-block ms-1' />
        </Button>
      </div>
    </div>
  );
};

export default AddNewMessage;

AddNewMessage.defaultProps = {
  message: '',
};

AddNewMessage.propTypes = {
  sendFileMessage: PropTypes.func,
  onSendMessage: PropTypes.func,
  currentMessage: PropTypes.string,
};
