import React from 'react';
import {Button, OverlayTrigger, Tooltip} from 'react-bootstrap';

const Tooltips2 = () => {
  return (
    <div>
      <>
        {['top', 'right', 'bottom', 'left'].map((placement) => (
          <OverlayTrigger
            key={placement}
            placement={placement}
            overlay={
              <Tooltip id={`tooltip-${placement}`}>
                Tooltip on <strong>{placement}</strong>.
              </Tooltip>
            }>
            <Button variant='secondary'>Tooltip on {placement}</Button>
          </OverlayTrigger>
        ))}
      </>
    </div>
  );
};

export default Tooltips2;
