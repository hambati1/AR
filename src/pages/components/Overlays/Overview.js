import React, {useRef, useState} from 'react';
import {Button, Overlay} from 'react-bootstrap';

function Example() {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <>
      <Button variant='danger' ref={target} onClick={() => setShow(!show)}>
        Click me to see
      </Button>
      <Overlay target={target.current} show={show} placement='right'>
        {({placement, arrowProps, show: _show, popper, ...props}) => (
          <div
            {...props}
            style={{
              backgroundColor: 'rgba(255, 100, 100, 0.85)',
              padding: '2px 10px',
              color: 'white',
              borderRadius: 3,
              ...props.style,
            }}>
            Simple tooltip
          </div>
        )}
      </Overlay>
    </>
  );
}

const Overview = () => {
  return (
    <div>
      <Example />
    </div>
  );
};

export default Overview;
