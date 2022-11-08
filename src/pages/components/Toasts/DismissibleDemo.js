import React, {useState} from 'react';
import {Button, Col, Row, Toast} from 'react-bootstrap';
import styles from './index.module.scss';
import clsx from 'clsx';

function Example() {
  const [showA, setShowA] = useState(true);
  const [showB, setShowB] = useState(true);

  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);

  return (
    <Row>
      <Col md={6} className='mb-2'>
        <Button onClick={toggleShowA} className='mb-2'>
          Toggle Toast <strong>with</strong> Animation
        </Button>
        <Toast show={showA} onClose={toggleShowA}>
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
      <Col md={6} className='mb-2'>
        <Button onClick={toggleShowB} className='mb-2'>
          Toggle Toast <strong>without</strong> Animation
        </Button>
        <Toast onClose={toggleShowB} show={showB} animation={false}>
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
    </Row>
  );
}

const DismissibleDemo = () => {
  return (
    <div>
      <Example />
    </div>
  );
};

export default DismissibleDemo;
