import React from 'react';
import {ListGroup} from 'react-bootstrap';

const Disabled = () => {
  return (
    <div>
      <ListGroup>
        <ListGroup.Item disabled>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Disabled;
