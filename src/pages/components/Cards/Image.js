import React from 'react';
import {Card} from 'react-bootstrap';

const Image = () => {
  return (
    <>
      <Card>
        <Card.Img variant='top' src='https://via.placeholder.com/100x180' />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </Card.Text>
        </Card.Body>
        <Card.Img variant='bottom' src='https://via.placeholder.com/100x180' />
      </Card>
    </>
  );
};

export default Image;
