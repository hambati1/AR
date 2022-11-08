import React from 'react';
import {Button, FormControl, InputGroup} from 'react-bootstrap';
import styles from './index.module.scss';

const ButtonDemo = () => {
  return (
    <div style={{width: '100%'}}>
      <InputGroup className='mb-3'>
        <Button
          variant='outline-secondary'
          id='button-addon1'
          className={styles.inputGroupBtnRight}>
          Button
        </Button>
        <FormControl
          aria-label='Example text with button addon'
          className={styles.inputFormControlLeft}
          aria-describedby='basic-addon1'
        />
      </InputGroup>

      <InputGroup className='mb-3'>
        <FormControl
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby='basic-addon2'
          className={styles.inputFormControlRight}
        />
        <Button
          variant='outline-secondary'
          id='button-addon2'
          className={styles.inputGroupBtnLeft}>
          Button
        </Button>
      </InputGroup>

      <InputGroup className='mb-3'>
        <Button
          variant='outline-secondary'
          className={styles.inputGroupBtnRight}>
          Button
        </Button>
        <Button variant='outline-secondary'>Button</Button>
        <FormControl
          aria-label='Example text with two button addons'
          className={styles.inputFormControlLeft}
        />
      </InputGroup>

      <InputGroup>
        <FormControl
          placeholder="Recipient's username"
          aria-label="Recipient's username with two button addons"
          className={styles.inputFormControlRight}
        />
        <Button variant='outline-secondary'>Button</Button>
        <Button
          variant='outline-secondary'
          className={styles.inputGroupBtnLeft}>
          Button
        </Button>
      </InputGroup>
    </div>
  );
};

export default ButtonDemo;
