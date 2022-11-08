import React from 'react';
import DropdownItem from 'react-bootstrap/DropdownItem';
import {
  ButtonGroup,
  Dropdown,
  DropdownButton,
  SplitButton,
} from 'react-bootstrap';
import styles from './index.module.scss';
import clsx from 'clsx';

const Sizing = () => {
  return (
    <div style={{width: '100%'}}>
      <div className={clsx(styles.dropDownDemoWrapper, 'mb-2')}>
        {[DropdownButton, SplitButton].map((DropdownType, idx) => (
          <DropdownType
            as={ButtonGroup}
            key={idx}
            id={`dropdown-button-drop-${idx}`}
            size='lg'
            title='Drop large'>
            <DropdownItem eventKey='1'>Action</DropdownItem>
            <DropdownItem eventKey='2'>Another action</DropdownItem>
            <DropdownItem eventKey='3'>Something else here</DropdownItem>
            <Dropdown.Divider />
            <DropdownItem eventKey='4'>Separated link</DropdownItem>
          </DropdownType>
        ))}
      </div>
      <div className={styles.dropDownDemoWrapper}>
        {[DropdownButton, SplitButton].map((DropdownType, idx) => (
          <DropdownType
            as={ButtonGroup}
            key={idx}
            id={`dropdown-button-drop-${idx}`}
            size='sm'
            variant='secondary'
            title='Drop small'>
            <DropdownItem eventKey='1'>Action</DropdownItem>
            <DropdownItem eventKey='2'>Another action</DropdownItem>
            <DropdownItem eventKey='3'>Something else here</DropdownItem>
            <Dropdown.Divider />
            <DropdownItem eventKey='4'>Separated link</DropdownItem>
          </DropdownType>
        ))}
      </div>
    </div>
  );
};

export default Sizing;
