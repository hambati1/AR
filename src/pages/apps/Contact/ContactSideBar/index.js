import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import IntlMessages from '@crema/utility/IntlMessages';
import CreateContact from '../CreateContact';
import LabelItem from './LabelItem';
import AppsSideBarFolderItem from '@crema/core/AppsSideBarFolderItem';
import AppList from '@crema/core/AppList';
import ListEmptyResult from '@crema/core/AppList/ListEmptyResult';
import SidebarPlaceholder from '@crema/core/AppSkeleton/SidebarListSkeleton';
import AppScrollbar from '@crema/core/AppScrollbar';
import styles from './index.module.scss';
import {AppAnimates} from 'shared/constants/AppEnums';
import {Button} from "react-bootstrap";
import {AiOutlinePlus} from 'react-icons/ai';

const SideBarContent = () => {
  const labelList = useSelector(({contactApp}) => contactApp.labelList);

  const folderList = useSelector(({contactApp}) => contactApp.folderList);

  const [isAddContact, onSetIsAddContact] = useState(false);

  const handleAddContactOpen = () => {
    onSetIsAddContact(true);
  };

  const handleAddContactClose = () => {
    onSetIsAddContact(false);
  };

  return (
    <>
      <div className={styles.contactSidebarHeader}>
        <Button
          variant="outline-primary"
          onClick={handleAddContactOpen}>
          <AiOutlinePlus />
          <IntlMessages id='contactApp.createContact' />
        </Button>
      </div>

      <AppScrollbar className={styles.contactSidebarScrollbar}>
        <div className={styles.contactSidebarContent}>
          <div className={styles.contactSidebarList}>
            <AppList
              animation={AppAnimates.SLIDELEFTIN}
              data={folderList}
              ListEmptyComponent={
                <ListEmptyResult
                  loading={true}
                  placeholder={<SidebarPlaceholder />}
                />
              }
              renderItem={(item) => (
                <AppsSideBarFolderItem
                  key={item.id}
                  item={item}
                  path={`/apps/contact/folder/${item.alias}`}
                />
              )}
            />
          </div>

          <h5 className={styles.contactSidebarTitle}>
            <IntlMessages id='common.labels' />
          </h5>

          <AppList
            animation={AppAnimates.SLIDELEFTIN}
            data={labelList}
            ListEmptyComponent={
              <ListEmptyResult
                loading={true}
                placeholder={<SidebarPlaceholder />}
              />
            }
            renderItem={(label) => <LabelItem key={label.id} label={label} />}
          />

          {isAddContact ? (
            <CreateContact
              isAddContact={isAddContact}
              handleAddContactClose={handleAddContactClose}
            />
          ) : null}
        </div>
      </AppScrollbar>
    </>
  );
};

export default SideBarContent;
