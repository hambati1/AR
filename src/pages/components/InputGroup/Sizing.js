import React from 'react';
import {FormControl, InputGroup} from 'react-bootstrap';
import styles from './index.module.scss';

const Sizing = () => {
  return (
    <div style={{width: '100%'}}>
      <InputGroup size='sm' className='mb-3'>
        <InputGroup.Text
          id='inputGroup-sizing-sm'
          className={styles.inputGroupBtnRight}>
          Small
        </InputGroup.Text>
        <FormControl
          aria-label='Small'
          aria-describedby='inputGroup-sizing-sm'
          className={styles.inputFormControlLeft}
        />
      </InputGroup>
      <br />
      <InputGroup className='mb-3'>
        <InputGroup.Text
          id='inputGroup-sizing-default'
          className={styles.inputGroupBtnRight}>
          Default
        </InputGroup.Text>
        <FormControl
          aria-label='Default'
          aria-describedby='inputGroup-sizing-default'
          className={styles.inputFormControlLeft}
        />
      </InputGroup>
      <br />
      <InputGroup size='lg'>
        <InputGroup.Text
          id='inputGroup-sizing-lg'
          className={styles.inputGroupBtnRight}>
          Large
        </InputGroup.Text>
        <FormControl
          aria-label='Large'
          aria-describedby='inputGroup-sizing-sm'
          className={styles.inputFormControlLeft}
        />
      </InputGroup>
    </div>
  );
};

export default Sizing;
