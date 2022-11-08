import React from 'react';
import {Button, ButtonGroup} from 'react-bootstrap';

const Sizing = () => {
  return (
    <>
      <ButtonGroup size='lg' className='mb-2'>
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
      <br />
      <ButtonGroup className='mb-2'>
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
      <br />
      <ButtonGroup size='sm'>
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
    </>
  );
};

export default Sizing;
