import React from 'react';
import {Button} from 'react-bootstrap';

const Active = () => {
  return (
    <>
      <Button variant='primary' size='lg' active>
        Primary button
      </Button>{' '}
      <Button variant='secondary' size='lg' active>
        Button
      </Button>
    </>
  );
};

export default Active;
