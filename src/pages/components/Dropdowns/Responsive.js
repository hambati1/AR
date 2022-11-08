import React from 'react';
import {
  ButtonGroup,
  Dropdown,
  DropdownButton,
  SplitButton,
} from 'react-bootstrap';
import styles from './index.module.scss';
import clsx from 'clsx';

const Responsive = () => {
  return (
    <div style={{width: '100%'}}>
      <div>
        <DropdownButton
          as={ButtonGroup}
          align={{lg: 'end'}}
          title='Left-aligned but right aligned when large screen'
          id='dropdown-menu-align-responsive-1'>
          <Dropdown.Item eventKey='1'>Action 1</Dropdown.Item>
          <Dropdown.Item eventKey='2'>Action 2</Dropdown.Item>
        </DropdownButton>
      </div>
      <div className={clsx(styles.dropDownDemoWrapper2, 'mb-2')}>
        <SplitButton
          align={{lg: 'start'}}
          title='Right-aligned but left aligned when large screen'
          id='dropdown-menu-align-responsive-2'>
          <Dropdown.Item eventKey='1'>Action 1</Dropdown.Item>
          <Dropdown.Item eventKey='2'>Action 2</Dropdown.Item>
        </SplitButton>
      </div>
    </div>
  );
};

export default Responsive;
