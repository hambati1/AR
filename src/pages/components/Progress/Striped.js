import React from 'react';
import {ProgressBar} from 'react-bootstrap';

const Striped = () => {
  return (
    <div style={{width: '100%'}}>
      <ProgressBar striped variant='success' now={40} />
      <ProgressBar striped variant='info' now={20} />
      <ProgressBar striped variant='warning' now={60} />
      <ProgressBar striped variant='danger' now={80} />
    </div>
  );
};

export default Striped;
