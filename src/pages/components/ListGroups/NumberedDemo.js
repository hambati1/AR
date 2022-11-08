import React from 'react';
import {ListGroup} from 'react-bootstrap';

const NumberedDemo = () => {
  return (
    <div>
      <ListGroup as='ol' numbered>
        <ListGroup.Item as='li'>Cras justo odio</ListGroup.Item>
        <ListGroup.Item as='li'>Cras justo odio</ListGroup.Item>
        <ListGroup.Item as='li'>Cras justo odio</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default NumberedDemo;
