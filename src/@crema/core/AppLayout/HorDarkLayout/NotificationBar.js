import React, {useState} from 'react';
import styles from './index.module.scss'
import {Alert} from "react-bootstrap";

export default function NotificationBar() {
  const [show, setShow] = useState(true);

  console.log(show)

  return (
    show ?
      (
        <Alert
          className={styles.headerAlertDark} onClose={() => setShow(false)} dismissible>
          <p>
            Get flat 60% off on your first purchase
          </p>
        </Alert>
      )
      : null
  );
}
