import React from 'react';
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap';

const Kitchen = () => {
  return (
    <div>
      <Card style={{width: '18rem'}}>
        <Card.Img
          variant='top'
          src='https://via.placeholder.com/100x180?text=Image cap'
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </Card.Text>
        </Card.Body>
        <ListGroup className='list-group-flush'>
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href='#'>Card Link</Card.Link>
          <Card.Link href='#'>Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Kitchen;
