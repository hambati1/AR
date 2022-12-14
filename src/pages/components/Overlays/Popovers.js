import React from 'react';
import {Button, OverlayTrigger, Popover} from 'react-bootstrap';

const popover = (
  <Popover id='popover-basic'>
    <Popover.Header as='h3'>Popover right</Popover.Header>
    <Popover.Body>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </Popover.Body>
  </Popover>
);

const Example = () => (
  <OverlayTrigger trigger='click' placement='right' overlay={popover}>
    <Button variant='success'>Click me to see</Button>
  </OverlayTrigger>
);

const Popovers = () => {
  return (
    <div>
      <Example />
    </div>
  );
};

export default Popovers;
