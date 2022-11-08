import React from 'react';
import {Button} from 'react-bootstrap';
import {IoIosColorPalette} from 'react-icons/io';

export const MyPointer = () => {
  return (
    <Button className='border-0 w-40 h-40'>
      <IoIosColorPalette />
    </Button>
  );
};

export default MyPointer;
