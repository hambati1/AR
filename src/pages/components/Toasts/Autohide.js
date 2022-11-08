import clsx from 'clsx';
import React, {useState} from 'react';
import {Button, Col, Row, Toast} from 'react-bootstrap';
import styles from './index.module.scss';

function Example() {
  const [show, setShow] = useState(false);

  return (
    <Row>
      <Col xs={6}>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header className={styles.toastHeader}>
            <img
              src='holder.js/20x20?text=%20'
              className={clsx(styles.toastHeadingImg, 'rounded')}
              alt=''
            />
            <strong className={styles.toastHeading}>Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
      </Col>
      <Col xs={6}>
        <Button onClick={() => setShow(true)}>Show Toast</Button>
      </Col>
    </Row>
  );
}

const Autohide = () => {
  return (
    <div>
      <Example />
    </div>
  );
};

export default Autohide;
