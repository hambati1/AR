import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import styles from './index.module.scss';

function Example() {
  const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <div style={{width: '100%'}}>
      {values.map((v, idx) => (
        <Button key={idx} className='me-2' onClick={() => handleShow(v)}>
          Full screen
          {typeof v === 'string' && `below ${v.split('-')[0]}`}
        </Button>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header className={styles.closeBtn} closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal body content</Modal.Body>
      </Modal>
    </div>
  );
}

const Fullscreen = () => {
  return (
    <div>
      <Example />
    </div>
  );
};

export default Fullscreen;
