import React from 'react';
import {ProgressBar} from 'react-bootstrap';

const Example = () => {
  return (
    <div style={{width: '100%'}}>
      <ProgressBar now={60} />
    </div>
  );
};

export default Example;
