import React, {useState} from 'react';
import ConnectionList from './ConnectionList';
import ChatList from './ChatList';
import PropTypes from 'prop-types';
import IntlMessages from '@crema/utility/IntlMessages';
import {Tabs, Tab} from 'react-bootstrap';
import {BsChatSquareText} from 'react-icons/bs';
import {BiUserPin} from 'react-icons/bi';
import styles from '../index.module.scss';
import clsx from 'clsx';

const tabs = [
  {id: 333, name: <IntlMessages id='dashboard.messages' />},
  {id: 323, name: <IntlMessages id='chatApp.contacts' />},
];

const UserTabs = ({connectionListData, chatListData, loading}) => {
  const [listType, setListType] = useState('chatList');

  const handleChange = (value) => {
    setListType(value);
  };

  return (
    <div className={styles.chatSidebarUserTabs}>
      <Tabs
        className={styles.chatSidebarTabs}
        activeKey={listType}
        onSelect={(e) => handleChange(e)}>
        <Tab
          tabClassName={clsx(
            styles.tab,
            'd-flex flex-column align-items-center w-100 h-100',
          )}
          eventKey='chatList'
          title={
            <>
              <BsChatSquareText size={16} />
              {tabs[0].name}
            </>
          }>
          <ChatList chatListData={chatListData} loading={loading} />
        </Tab>
        <Tab
          tabClassName={clsx(
            styles.tab,
            'd-flex flex-column align-items-center w-100 h-100',
          )}
          eventKey='connectionList'
          title={
            <>
              <BiUserPin size={16} />
              {tabs[1].name}
            </>
          }>
          <ConnectionList
            connectionListData={connectionListData}
            loading={loading}
          />
        </Tab>
      </Tabs>
    </div>
  );
};

export default UserTabs;

UserTabs.defaultProps = {
  connectionListData: [],
  chatListData: [],
};

UserTabs.propTypes = {
  connectionListData: PropTypes.array,
  chatListData: PropTypes.array,
  loading: PropTypes.bool,
};
