import React from 'react';
import {ProgressBar} from 'react-bootstrap';
const now = 60;

const With = () => {
  return (
    <div style={{width: '100%'}}>
      <ProgressBar now={now} label={`${now}%`} />
    </div>
  );
};

export default With;
