import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import styles from './index.module.scss';

function Example() {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <Button onClick={() => setSmShow(true)}>Small modal</Button>{' '}
      <Button onClick={() => setLgShow(true)}>Large modal</Button>
      <Modal
        size='sm'
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby='example-modal-sizes-title-sm'>
        <Modal.Header className={styles.closeBtn} closeButton>
          <Modal.Title id='example-modal-sizes-title-sm'>
            Small Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
      <Modal
        size='lg'
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby='example-modal-sizes-title-lg'>
        <Modal.Header className={styles.closeBtn} closeButton>
          <Modal.Title id='example-modal-sizes-title-lg'>
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
    </>
  );
}

const Optional = () => {
  return (
    <div>
      <Example />
    </div>
  );
};

export default Optional;
