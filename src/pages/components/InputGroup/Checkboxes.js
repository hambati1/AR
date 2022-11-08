import clsx from 'clsx';
import React from 'react';
import {FormControl, InputGroup} from 'react-bootstrap';
import styles from './index.module.scss';

const Checkboxes = () => {
  return (
    <div style={{width: '100%'}}>
      <InputGroup className={clsx(styles.checkboxWrapper, 'mb-3')}>
        <InputGroup.Checkbox aria-label='Checkbox for following text input' />
        <FormControl
          aria-label='Text input with checkbox'
          className={styles.inputFormControlLeft}
        />
      </InputGroup>
      <InputGroup className={styles.checkboxWrapper}>
        <InputGroup.Radio aria-label='Radio button for following text input' />
        <FormControl
          aria-label='Text input with radio button'
          className={styles.inputFormControlLeft}
        />
      </InputGroup>
    </div>
  );
};

export default Checkboxes;
