import React from 'react';
import AppComponentHeader from '@crema/core/AppComponentHeader';
import AppRowContainer from '@crema/core/AppRowContainer';
import {Col} from 'react-bootstrap';
import AppComponentCard from '@crema/core/AppComponentCard';

import Shape from './Shape';
import ShapeSource from '!raw-loader!./Shape';
import Fluid from './Fluid';
import FluidSource from '!raw-loader!./Fluid';

const Images = () => {
  return (
    <>
      <AppComponentHeader
        title='Images'
        description=''
        refUrl='https://react-bootstrap.github.io/components/images/'
      />

      <AppRowContainer>
        <Col xs={12}>
          <AppComponentCard
            title='Shape'
            component={Shape}
            source={ShapeSource}
            noScrollbar
            description='Displaying related images and text with the Figure component.'
          />
        </Col>
        <Col xs={12}>
          <AppComponentCard
            title='Fluid'
            component={Fluid}
            source={FluidSource}
            noScrollbar
            description='Displaying related images and text with the Figure component.'
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Images;
