import React from 'react';
import {Button} from 'react-bootstrap';

const Block = () => {
  return (
    <div className='d-grid gap-2'>
      <Button variant='primary' size='lg'>
        Block level button
      </Button>
      <Button variant='secondary' size='lg'>
        Block level button
      </Button>
    </div>
  );
};

export default Block;
