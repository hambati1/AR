import React from 'react';
import {Button, ButtonGroup, Dropdown} from 'react-bootstrap';
import styles from './index.module.scss';

const CustomizationDemo = () => {
  return (
    <div>
      <>
        <Dropdown as={ButtonGroup}>
          <Dropdown.Toggle id='dropdown-custom-1'>Pow! Zoom!</Dropdown.Toggle>
          <Dropdown.Menu className='super-colors'>
            <Dropdown.Item eventKey='1'>Action</Dropdown.Item>
            <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>
            <Dropdown.Item eventKey='3' active>
              Active Item
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey='4'>Separated link</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>{' '}
        <Dropdown as={ButtonGroup}>
          <Button variant='info' className={styles.inputGroupBtnRight}>
            mix it up style-wise
          </Button>
          <Dropdown.Toggle
            split
            variant='success'
            id='dropdown-custom-2'
            className={styles.inputGroupBtnLeft}
          />
          <Dropdown.Menu className='super-colors'>
            <Dropdown.Item eventKey='1'>Action</Dropdown.Item>
            <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>
            <Dropdown.Item eventKey='3' active>
              Active Item
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey='4'>Separated link</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </>
    </div>
  );
};

export default CustomizationDemo;
