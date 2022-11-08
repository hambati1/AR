import React from 'react';
import {Button, ButtonGroup, DropdownButton} from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/DropdownItem';

const Vertical = () => {
  return (
    <ButtonGroup vertical>
      <Button>Button</Button>
      <Button>Button</Button>

      <DropdownButton
        as={ButtonGroup}
        title='Dropdown'
        id='bg-vertical-dropdown-1'>
        <DropdownItem eventKey='1'>Dropdown link</DropdownItem>
        <DropdownItem eventKey='2'>Dropdown link</DropdownItem>
      </DropdownButton>

      <Button>Button</Button>
      <Button>Button</Button>

      <DropdownButton
        as={ButtonGroup}
        title='Dropdown'
        id='bg-vertical-dropdown-2'>
        <DropdownItem eventKey='1'>Dropdown link</DropdownItem>
        <DropdownItem eventKey='2'>Dropdown link</DropdownItem>
      </DropdownButton>

      <DropdownButton
        as={ButtonGroup}
        title='Dropdown'
        id='bg-vertical-dropdown-3'>
        <DropdownItem eventKey='1'>Dropdown link</DropdownItem>
        <DropdownItem eventKey='2'>Dropdown link</DropdownItem>
      </DropdownButton>
    </ButtonGroup>
  );
};

export default Vertical;
