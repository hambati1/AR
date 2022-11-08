import React, {useRef, useState} from 'react';
import {Button, Overlay, Tooltip} from 'react-bootstrap';

function Example() {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <>
      <Button ref={target} onClick={() => setShow(!show)}>
        Click me!
      </Button>
      <Overlay target={target.current} show={show} placement='right'>
        {(props) => (
          <Tooltip id='overlay-example' {...props}>
            My Tooltip
          </Tooltip>
        )}
      </Overlay>
    </>
  );
}

const Tooltips = () => {
  return (
    <div>
      <Example />
    </div>
  );
};

export default Tooltips;
