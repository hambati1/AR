import React from 'react';
import {Button, ButtonGroup, Dropdown} from 'react-bootstrap';
import styles from './index.module.scss';

const Split = () => {
  return (
    <div>
      <Dropdown as={ButtonGroup}>
        <Button variant='success' className={styles.inputGroupBtnRight}>
          Split Button
        </Button>

        <Dropdown.Toggle
          split
          variant='success'
          id='dropdown-split-basic'
          className={styles.inputGroupBtnLeft}
        />

        <Dropdown.Menu>
          <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
          <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
          <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Split;
