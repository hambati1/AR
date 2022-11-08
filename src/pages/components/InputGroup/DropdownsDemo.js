import clsx from 'clsx';
import React from 'react';
import {
  DropdownButton,
  FormControl,
  Dropdown,
  InputGroup,
} from 'react-bootstrap';
import styles from './index.module.scss';

const DropdownsDemo = () => {
  return (
    <div>
      <>
        <InputGroup className={clsx(styles.dropDownDemoWrapper1, 'mb-3')}>
          <DropdownButton
            variant='outline-secondary'
            title='Dropdown'
            id='input-group-dropdown-1'>
            <Dropdown.Item href='#'>Action</Dropdown.Item>
            <Dropdown.Item href='#'>Another action</Dropdown.Item>
            <Dropdown.Item href='#'>Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href='#'>Separated link</Dropdown.Item>
          </DropdownButton>
          <FormControl
            aria-label='Text input with dropdown button'
            className={styles.inputFormControlLeft}
          />
        </InputGroup>

        <InputGroup className={clsx(styles.dropDownDemoWrapper2, 'mb-3')}>
          <FormControl
            aria-label='Text input with dropdown button'
            className={styles.inputFormControlRight}
          />

          <DropdownButton
            variant='outline-secondary'
            title='Dropdown'
            id='input-group-dropdown-2'
            align='end'>
            <Dropdown.Item href='#'>Action</Dropdown.Item>
            <Dropdown.Item href='#'>Another action</Dropdown.Item>
            <Dropdown.Item href='#'>Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href='#'>Separated link</Dropdown.Item>
          </DropdownButton>
        </InputGroup>

        <InputGroup className={clsx(styles.dropDownDemoWrapper3, 'mb-3')}>
          <DropdownButton
            variant='outline-secondary'
            title='Dropdown'
            id='input-group-dropdown-3'>
            <Dropdown.Item href='#'>Action</Dropdown.Item>
            <Dropdown.Item href='#'>Another action</Dropdown.Item>
            <Dropdown.Item href='#'>Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href='#'>Separated link</Dropdown.Item>
          </DropdownButton>
          <FormControl aria-label='Text input with 2 dropdown buttons' />
          <DropdownButton
            variant='outline-secondary'
            title='Dropdown'
            id='input-group-dropdown-4'
            align='end'>
            <Dropdown.Item href='#'>Action</Dropdown.Item>
            <Dropdown.Item href='#'>Another action</Dropdown.Item>
            <Dropdown.Item href='#'>Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href='#'>Separated link</Dropdown.Item>
          </DropdownButton>
        </InputGroup>
      </>
    </div>
  );
};

export default DropdownsDemo;
