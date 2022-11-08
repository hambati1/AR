import React from 'react';
import ConnectionItem from './ConnectionItem';
import PropTypes from 'prop-types';
import AppList from '@crema/core/AppList';
import ListEmptyResult from '@crema/core/AppList/ListEmptyResult';
import ChatListSkeleton from '@crema/core/AppSkeleton/ChatListSkeleton';
import {useIntl} from 'react-intl';
import {useSelector} from 'react-redux';
import AppScrollbar from '@crema/core/AppScrollbar';
import styles from '../../index.module.scss';
import clsx from 'clsx';

const ConnectionList = ({connectionListData, loading}) => {
  const {messages} = useIntl();
  const {selectedUser} = useSelector(({chatApp}) => chatApp);
  return (
    <AppScrollbar className={styles.chatSidebarScrollbar}>
      <h3 className={styles.chatSidebarTitle}>Contacts</h3>
      <AppList
        data={connectionListData}
        ListEmptyComponent={
          <ListEmptyResult
            content={messages['chatApp.noUserFound']}
            loading={loading}
            placeholder={<ChatListSkeleton />}
          />
        }
        renderItem={(item) => (
          <ConnectionItem
            key={item.id}
            item={item}
            selectedUser={selectedUser}
          />
        )}
      />
    </AppScrollbar>
  );
};

export default ConnectionList;

ConnectionList.propTypes = {
  connectionListData: PropTypes.array.isRequired,
  loading: PropTypes.bool,
};
