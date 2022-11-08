import React from 'react';
import {Placeholder} from 'react-bootstrap';

const Width = () => {
  return (
    <div style={{width: '100%'}}>
      <Placeholder xs={6} />
      <Placeholder className='w-75' /> <Placeholder style={{width: '25%'}} />
    </div>
  );
};

export default Width;
