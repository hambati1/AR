import React from 'react';
import {useSelector} from 'react-redux';
import NoUserScreen from './NoUserScreen';
import MessagesScreen from './MessagesScreen';
import styles from './index.module.scss';
import clsx from 'clsx';

const ChatContent = () => {
  const {selectedUser} = useSelector(({chatApp}) => chatApp);
  const {loading} = useSelector(({common}) => common);

  return (
    <>
      {selectedUser ? (
        <div className='h-100 d-flex flex-column'>
          <MessagesScreen selectedUser={selectedUser} loading={loading} />
        </div>
      ) : (
        <div
          className={clsx(
            styles.chatNoUserScreen,
            'd-flex flex-column justify-content-center align-content-center text-center h-100 p-3',
          )}>
          <NoUserScreen />
        </div>
      )}
    </>
  );
};

export default ChatContent;
