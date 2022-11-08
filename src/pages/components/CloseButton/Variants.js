import React from 'react';
import {CloseButton} from 'react-bootstrap';

const Variants = () => {
  return (
    <>
      <div className='bg-dark p-3'>
        <CloseButton variant='white' />
        <CloseButton variant='white' disabled />
      </div>
    </>
  );
};

export default Variants;
