import React, {useState} from 'react';
import {AiOutlineDelete} from 'react-icons/ai';
import IntlMessages from '../../utility/IntlMessages';
import PropTypes from 'prop-types';
import ConfirmationModal from '../AppConfirmationModal';
import AppIconBtn from "../AppIconBtn";

const AppsDeleteIcon = ({deleteAction, smallBtn}) => {
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  return (
    <>
      <AppIconBtn smallBtn={smallBtn}
        title='Trash'
        onClick={() => {
          console.log('mai hu');
          setDeleteModalOpen(true);
        }}
      >
        <AiOutlineDelete />
      </AppIconBtn>
      {isDeleteModalOpen ? (
        <ConfirmationModal
          open={isDeleteModalOpen}
          paragraph={'Are you sure you want to delete this?'}
          onDeny={setDeleteModalOpen}
          onConfirm={deleteAction}
          modalTitle={<IntlMessages id='common.deleteItem' />}
        />
      ) : null}
    </>
  );
};

export default AppsDeleteIcon;
AppsDeleteIcon.propTypes = {
  deleteAction: PropTypes.func,
  deleteTitle: PropTypes.any,
  smallBtn: PropTypes.bool,
};
