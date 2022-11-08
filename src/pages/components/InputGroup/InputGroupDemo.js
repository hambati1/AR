import React from 'react';
import {FormControl, InputGroup, Form} from 'react-bootstrap';
import styles from './index.module.scss';

const InputGroupDemo = () => {
  return (
    <div style={{width: '100%'}}>
      <InputGroup className='mb-3'>
        <InputGroup.Text
          id='basic-addon1'
          className={styles.inputGroupBtnRight}>
          @
        </InputGroup.Text>
        <FormControl
          placeholder='Username'
          aria-label='Username'
          aria-describedby='basic-addon1'
          className={styles.inputFormControlLeft}
        />
      </InputGroup>

      <InputGroup className='mb-3'>
        <FormControl
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby='basic-addon2'
          className={styles.inputFormControlRight}
        />
        <InputGroup.Text id='basic-addon2' className={styles.inputGroupBtnLeft}>
          @example.com
        </InputGroup.Text>
      </InputGroup>

      <Form.Label htmlFor='basic-url'>Your vanity URL</Form.Label>
      <InputGroup className='mb-3'>
        <InputGroup.Text
          id='basic-addon3'
          className={styles.inputGroupBtnRight}>
          https://example.com/users/
        </InputGroup.Text>
        <FormControl
          id='basic-url'
          aria-describedby='basic-addon3'
          className={styles.inputFormControlLeft}
        />
      </InputGroup>

      <InputGroup className='mb-3'>
        <InputGroup.Text className={styles.inputGroupBtnRight}>
          $
        </InputGroup.Text>
        <FormControl aria-label='Amount (to the nearest dollar)' />
        <InputGroup.Text className={styles.inputGroupBtnLeft}>
          .00
        </InputGroup.Text>
      </InputGroup>

      <InputGroup>
        <InputGroup.Text className={styles.inputGroupBtnRight}>
          With textarea
        </InputGroup.Text>
        <FormControl
          as='textarea'
          aria-label='With textarea'
          className={styles.inputFormControlLeft}
        />
      </InputGroup>
    </div>
  );
};

export default InputGroupDemo;
