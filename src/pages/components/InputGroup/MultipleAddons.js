import React from 'react';
import {FormControl, InputGroup} from 'react-bootstrap';
import styles from './index.module.scss';

const MultipleAddons = () => {
  return (
    <div>
      <InputGroup className='mb-3'>
        <InputGroup.Text className={styles.inputGroupBtnRight}>
          $
        </InputGroup.Text>
        <InputGroup.Text>0.00</InputGroup.Text>
        <FormControl
          aria-label='Dollar amount (with dot and two decimal places)'
          className={styles.inputFormControlLeft}
        />
      </InputGroup>
      <InputGroup>
        <FormControl
          aria-label='Dollar amount (with dot and two decimal places)'
          className={styles.inputFormControlRight}
        />
        <InputGroup.Text>$</InputGroup.Text>
        <InputGroup.Text className={styles.inputGroupBtnLeft}>
          0.00
        </InputGroup.Text>
      </InputGroup>
    </div>
  );
};

export default MultipleAddons;
