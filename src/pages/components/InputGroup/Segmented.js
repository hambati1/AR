import clsx from 'clsx';
import React from 'react';
import {FormControl, InputGroup, Dropdown, SplitButton} from 'react-bootstrap';
import styles from './index.module.scss';

const Segmented = () => {
  return (
    <div style={{width: '100%'}}>
      <InputGroup className={clsx(styles.segmentedWrapper1, 'mb-3')}>
        <SplitButton
          variant='outline-secondary'
          title='Action'
          id='segmented-button-dropdown-1'>
          <Dropdown.Item href='#'>Action</Dropdown.Item>
          <Dropdown.Item href='#'>Another action</Dropdown.Item>
          <Dropdown.Item href='#'>Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href='#'>Separated link</Dropdown.Item>
        </SplitButton>
        <FormControl
          aria-label='Text input with dropdown button'
          className={styles.inputFormControlLeft}
        />
      </InputGroup>

      <InputGroup className={clsx(styles.segmentedWrapper2, 'mb-3')}>
        <FormControl
          aria-label='Text input with dropdown button'
          className={styles.inputFormControlRight}
        />
        <SplitButton
          variant='outline-secondary'
          title='Action'
          id='segmented-button-dropdown-2'
          alignRight>
          <Dropdown.Item href='#'>Action</Dropdown.Item>
          <Dropdown.Item href='#'>Another action</Dropdown.Item>
          <Dropdown.Item href='#'>Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href='#'>Separated link</Dropdown.Item>
        </SplitButton>
      </InputGroup>
    </div>
  );
};

export default Segmented;
