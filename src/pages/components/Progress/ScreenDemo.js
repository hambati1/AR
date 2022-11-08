import React from 'react';
import {ProgressBar} from 'react-bootstrap';
const now = 60;

const ScreenDemo = () => {
  return (
    <div style={{width: '100%'}}>
      <ProgressBar now={now} label={`${now}%`} visuallyHidden />
    </div>
  );
};

export default ScreenDemo;
