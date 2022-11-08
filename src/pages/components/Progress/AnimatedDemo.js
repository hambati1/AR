import React from 'react';
import {ProgressBar} from 'react-bootstrap';

const AnimatedDemo = () => {
  return (
    <div style={{width: '100%'}}>
      <ProgressBar animated now={45} />
    </div>
  );
};

export default AnimatedDemo;
