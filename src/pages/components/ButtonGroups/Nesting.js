import React from 'react';
import {Button, ButtonGroup, DropdownButton} from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/DropdownItem';

const Nesting = () => {
  return (
    <div>
      <ButtonGroup>
        <Button>1</Button>
        <Button>2</Button>

        <DropdownButton
          as={ButtonGroup}
          title='Dropdown'
          id='bg-nested-dropdown'>
          <DropdownItem eventKey='1'>Dropdown link</DropdownItem>
          <DropdownItem eventKey='2'>Dropdown link</DropdownItem>
        </DropdownButton>
      </ButtonGroup>
    </div>
  );
};

export default Nesting;
