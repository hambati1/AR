import React, {useRef, useState} from 'react';
import {Button, Overlay, Popover} from 'react-bootstrap';

function Example() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <Button onClick={handleClick}>Holy guacamole!</Button>

      <Overlay
        show={show}
        target={target}
        placement='bottom'
        container={ref}
        containerPadding={20}>
        <Popover id='popover-contained'>
          <Popover.Header as='h3'>Popover bottom</Popover.Header>
          <Popover.Body>
            <strong>Holy guacamole!</strong> Check this info.
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
}

const Changing = () => {
  return (
    <div>
      <Example />
    </div>
  );
};

export default Changing;
