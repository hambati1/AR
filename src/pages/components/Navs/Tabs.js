import React from 'react';
import {Nav} from 'react-bootstrap';

const Tabs = () => {
  return (
    <div>
      <Nav variant='tabs' defaultActiveKey='/home'>
        <Nav.Item>
          <Nav.Link href='/home'>Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link-1'>Option 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='disabled' disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Tabs;
