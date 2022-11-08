import React from 'react';

import PropTypes from 'prop-types';
import {Modal, Button} from 'react-bootstrap';

const AppConfirmationModal = ({open, onDeny, onConfirm, modalTitle, paragraph, title}) => {
  return (
    <Modal show={open} onHide={() => onDeny(false)} centered>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>{paragraph}</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant='outline-primary' onClick={() => onDeny(false)}>
          Cancel
        </Button>
        <Button variant='primary' onClick={onConfirm}>
          Ok
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

AppConfirmationModal.propTypes = {
  modalTitle: PropTypes.any.isRequired,
  open: PropTypes.bool.isRequired,
  onDeny: PropTypes.func.isRequired,
  paragraph: PropTypes.any,
  onConfirm: PropTypes.func.isRequired,
};

AppConfirmationModal.defaultProps = {
  paragraph: 'Are you sure you want to delete?',
};
export default AppConfirmationModal;
