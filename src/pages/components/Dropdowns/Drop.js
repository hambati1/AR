import React from 'react';
import {
  ButtonGroup,
  Dropdown,
  DropdownButton,
  SplitButton,
} from 'react-bootstrap';
import styles from './index.module.scss';

const Drop = () => {
  return (
    <div style={{width: '100%'}}>
      <>
        <div className='mb-2'>
          {['up', 'down', 'start', 'end'].map((direction) => (
            <DropdownButton
              as={ButtonGroup}
              key={direction}
              id={`dropdown-button-drop-${direction}`}
              drop={direction}
              variant='secondary'
              title={` Drop ${direction} `}>
              <Dropdown.Item eventKey='1'>Action</Dropdown.Item>
              <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>
              <Dropdown.Item eventKey='3'>Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey='4'>Separated link</Dropdown.Item>
            </DropdownButton>
          ))}
        </div>

        <div className={styles.dropDownDemoWrapper2}>
          {['up', 'down', 'start', 'end'].map((direction) => (
            <SplitButton
              key={direction}
              id={`dropdown-button-drop-${direction}`}
              drop={direction}
              variant='secondary'
              title={`Drop ${direction}`}>
              <Dropdown.Item eventKey='1'>Action</Dropdown.Item>
              <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>
              <Dropdown.Item eventKey='3'>Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey='4'>Separated link</Dropdown.Item>
            </SplitButton>
          ))}
        </div>
      </>
    </div>
  );
};

export default Drop;
