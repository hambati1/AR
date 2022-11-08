import React from 'react';
import {FormControl, InputGroup} from 'react-bootstrap';
import styles from './index.module.scss';

const Multiple = () => {
  return (
    <div style={{width: '100%'}}>
      <InputGroup className='mb-3'>
        <InputGroup.Text className={styles.inputGroupBtnRight}>
          First and last name
        </InputGroup.Text>
        <FormControl aria-label='First name' />
        <FormControl
          aria-label='Last name'
          className={styles.inputFormControlLeftBorder}
        />
      </InputGroup>
    </div>
  );
};

export default Multiple;
