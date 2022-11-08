import React from 'react';
import {Placeholder} from 'react-bootstrap';

const Colors = () => {
  return (
    <div style={{width: '100%'}}>
      <Placeholder xs={12} />

      <Placeholder xs={12} bg='primary' />
      <Placeholder xs={12} bg='secondary' />
      <Placeholder xs={12} bg='success' />
      <Placeholder xs={12} bg='danger' />
      <Placeholder xs={12} bg='warning' />
      <Placeholder xs={12} bg='info' />
      <Placeholder xs={12} bg='light' />
      <Placeholder xs={12} bg='dark' />
    </div>
  );
};

export default Colors;
