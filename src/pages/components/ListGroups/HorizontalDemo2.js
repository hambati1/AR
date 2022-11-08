import React from 'react';
import {ListGroup} from 'react-bootstrap';

const HorizontalDemo2 = () => {
  let idx;
  let breakpoint;
  return (
    <div>
      <ListGroup horizontal={breakpoint} className='my-2' key={idx}>
        <ListGroup.Item>This ListGroup</ListGroup.Item>
        <ListGroup.Item>renders horizontally</ListGroup.Item>
        <ListGroup.Item>on {breakpoint}</ListGroup.Item>
        <ListGroup.Item>and above!</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default HorizontalDemo2;
