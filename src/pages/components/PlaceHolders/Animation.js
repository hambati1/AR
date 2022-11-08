import React from 'react';
import {Placeholder} from 'react-bootstrap';

const Animation = () => {
  return (
    <div style={{width: '100%'}}>
      <Placeholder as='p' animation='glow'>
        <Placeholder xs={12} />
      </Placeholder>
      <Placeholder as='p' animation='wave'>
        <Placeholder xs={12} />
      </Placeholder>
    </div>
  );
};

export default Animation;
