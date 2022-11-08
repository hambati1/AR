import React, {useState} from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import ConfirmationModal from '@crema/core/AppConfirmationModal';
import {AiOutlineMore} from 'react-icons/ai';
import AppsStarredIcon from '@crema/core/AppsStarredIcon';
import {Dropdown} from 'react-bootstrap';
import UserInfo from '../../ChatSideBar/UserInfo';
import AppIconButton from '@crema/core/AppIconBtn';
import {MdOutlinePhone} from 'react-icons/md';
import {BiVideo} from 'react-icons/bi';
import clsx from 'clsx';
import styles from '../index.module.scss';

const Header = (props) => {
  const {
    deleteConversation,
    selectedUser,
    onChangeStarred,
    clearChatHistory,
    isChecked,
  } = props;
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const toggleDeleteModal = () => {
    setDeleteModalOpen(!isDeleteModalOpen);
  };

  const onDeleteConversation = () => {
    deleteConversation();
    toggleDeleteModal();
  };

  const menuLabel = (
    <Dropdown.Menu>
      <Dropdown.Item onClick={toggleDeleteModal}>
        <IntlMessages id='chatApp.deleteConversation'/>
      </Dropdown.Item>
      <Dropdown.Item onClick={clearChatHistory}>
        <IntlMessages id='chatApp.clearChat'/>
      </Dropdown.Item>
      <Dropdown.Item>
        <IntlMessages id='chatApp.hide'/>
      </Dropdown.Item>
    </Dropdown.Menu>
  );

  return (
    <div className='w-100 d-flex align-items-center'>
      <UserInfo user={selectedUser} showStatus={true}/>
      <div
        className={clsx(styles.chatHeaderAction, 'd-flex align-items-center')}>
        <AppIconButton
          smallBtn
          title={<IntlMessages id='common.call'/>}
        >
          <MdOutlinePhone/>
        </AppIconButton>

        <AppIconButton
          smallBtn
          title={<IntlMessages id='common.videoCall'/>}
        >
          <BiVideo/>
        </AppIconButton>

        <AppsStarredIcon
          smallBtn
          item={{isStarred: isChecked}}
          onChange={onChangeStarred}
        />

        <Dropdown overlay={menuLabel} trigger={['click']}>
          <AppIconButton
            smallBtn
            title={<IntlMessages id='common.more'/>}
          >
            <AiOutlineMore/>
          </AppIconButton>
        </Dropdown>
      </div>

      {isDeleteModalOpen ? (
        <ConfirmationModal
          open={isDeleteModalOpen}
          onDeny={setDeleteModalOpen}
          onConfirm={onDeleteConversation}
          modalTitle={<IntlMessages id='chatApp.deleteContent'/>}
        />
      ) : null}
    </div>
  );
};

export default Header;

Header.defaultProps = {};

Header.propTypes = {
  selectedUser: PropTypes.object.isRequired,
  deleteConversation: PropTypes.func,
  onChangeStarred: PropTypes.func,
  clearChatHistory: PropTypes.func,
  isChecked: PropTypes.bool,
};
