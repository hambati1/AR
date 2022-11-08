import React from 'react';
import {Placeholder} from 'react-bootstrap';

const HowDemo = () => {
  return (
    <div style={{width: '100%'}}>
      <p aria-hidden='true'>
        <Placeholder xs={6} />
      </p>

      <Placeholder.Button xs={4} aria-hidden='true' />
    </div>
  );
};

export default HowDemo;
