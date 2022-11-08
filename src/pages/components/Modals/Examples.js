import React from 'react';
import {Button, Modal} from 'react-bootstrap';
import styles from './index.module.scss';

const Examples = () => {
  return (
    <div>
      <Modal.Dialog>
        <Modal.Header className={styles.closeBtn} closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant='secondary'>Close</Button>
          <Button variant='primary'>Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default Examples;
