import React from 'react';
import {Button, OverlayTrigger, Tooltip} from 'react-bootstrap';
const OverlayTriggerDemo = () => {
  const renderTooltip = (props) => (
    <Tooltip id='button-tooltip' {...props}>
      Simple tooltip
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement='right'
      delay={{show: 250, hide: 400}}
      overlay={renderTooltip}>
      <Button variant='success'>Hover me to see</Button>
    </OverlayTrigger>
  );
};

export default OverlayTriggerDemo;
