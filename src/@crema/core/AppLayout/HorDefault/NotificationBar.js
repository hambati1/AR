import React, {useState} from 'react';
import {Alert} from "react-bootstrap";
import styles from './index.module.scss';

export default function NotificationBar() {
  const [show, setShow] = useState(true);

  console.log(show)

  return (
    show ?
      (
        <Alert
          className={styles.headerAlert} onClose={() => setShow(false)} dismissible>
          <p>
            Get flat 60% off on your first purchase
          </p>
        </Alert>
      )
      : null

  );
}
