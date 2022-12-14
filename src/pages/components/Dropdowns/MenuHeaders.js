import React from 'react';
import {Dropdown} from 'react-bootstrap';

const MenuHeaders = () => {
  return (
    <div style={{width: '100%'}}>
      <Dropdown.Menu show>
        <Dropdown.Header>Dropdown header</Dropdown.Header>
        <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>
        <Dropdown.Item eventKey='3'>Something else here</Dropdown.Item>
      </Dropdown.Menu>
    </div>
  );
};

export default MenuHeaders;
