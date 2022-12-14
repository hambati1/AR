import React from 'react';
import {DropdownButton, Dropdown} from 'react-bootstrap';

const MenuAlignment = () => {
  return (
    <div>
      <DropdownButton
        align='end'
        title='Dropdown end'
        id='dropdown-menu-align-end'>
        <Dropdown.Item eventKey='1'>Action</Dropdown.Item>
        <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>
        <Dropdown.Item eventKey='3'>Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey='4'>Separated link</Dropdown.Item>
      </DropdownButton>
    </div>
  );
};

export default MenuAlignment;
