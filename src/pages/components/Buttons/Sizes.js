import React from 'react';
import {Button} from 'react-bootstrap';

const Sizes = () => {
  return (
    <>
        <Button variant='primary' size='lg'>
          Large button
        </Button>
        <Button variant='secondary' size='lg'>
          Large button
        </Button>
        <Button variant='primary' size='sm'>
          Small button
        </Button>{' '}
        <Button variant='secondary' size='sm'>
          Small button
        </Button>
    </>
  );
};

export default Sizes;
