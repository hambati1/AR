import React, {useState} from 'react';
import UserInfo from './UserInfo';
import UserTabs from './UserTabs';
import {useSelector} from 'react-redux';
import moment from 'moment';
import {useIntl} from 'react-intl';
import {InputGroup, FormControl} from 'react-bootstrap';
import styles from './index.module.scss';
import {Search} from 'react-bootstrap-icons';
import {useAuthUser} from '@crema/utility/AuthHooks';

const ChatSideBar = () => {
  const [keywords, setKeywords] = useState('');
  const {user} = useAuthUser();

  const {connectionList} = useSelector(({chatApp}) => chatApp);
  const {loading} = useSelector(({common}) => common);

  const getConnectionList = () => {
    if (keywords !== '') {
      return connectionList.filter((item) =>
        item.name.toUpperCase().includes(keywords.toUpperCase()),
      );
    }
    return connectionList;
  };

  const getChatList = () => {
    let chatsList = connectionList.filter((item) => item.lastMessage);
    if (keywords !== '') {
      chatsList = chatsList.filter((item) =>
        item.name.toUpperCase().includes(keywords.toUpperCase()),
      );
    }
    chatsList.sort((a, b) => {
      let momentA = moment(a.lastMessage.time).format('X');
      let momentB = moment(b.lastMessage.time).format('X');
      return momentB - momentA;
    });
    return chatsList;
  };

  const connectionListData = getConnectionList();

  const chatListData = getChatList();

  const {messages} = useIntl();

  return (
    <div className='d-flex flex-column h-100'>
      <div className={styles.chatSidebarUserView}>
        <UserInfo user={user} showStatusActive={true} />
      </div>

      <div className={styles.chatSidebarSearchView}>
        <InputGroup className='position-relative'>
          <FormControl
            placeholder={messages['common.searchHere']}
            aria-describedby='basic-addon2'
            value={keywords}
            className={styles.searchInput}
            onChange={(e) => setKeywords(e.target.value)}
          />
          <InputGroup.Text id='basic-addon2' className={styles.searchBtn}>
            <Search />
          </InputGroup.Text>
        </InputGroup>
      </div>

      <UserTabs
        connectionListData={connectionListData}
        chatListData={chatListData}
        loading={loading}
      />
    </div>
  );
};

export default ChatSideBar;
