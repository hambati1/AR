import React from 'react';
import {Dropdown} from 'react-bootstrap';

const MenuDividers = () => {
  return (
    <div style={{width: '100%'}}>
      <Dropdown.Menu show>
        <Dropdown.Item eventKey='1'>Action</Dropdown.Item>
        <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>
        <Dropdown.Item eventKey='3'>Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey='4'>Separated link</Dropdown.Item>
      </Dropdown.Menu>
    </div>
  );
};

export default MenuDividers;
