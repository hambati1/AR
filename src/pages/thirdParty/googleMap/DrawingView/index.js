import React from 'react';

import ComponentCard from '@crema/core/AppComponentCard';
import ComponentHeader from '@crema/core/AppComponentHeader';
import AppRowSimpleContainer from '@crema/core/AppRowContainer/AppRowSimpleContainer';

import DrawingView from './Components/DrawingView';
import DrawingViewSource from '!raw-loader!./Components/DrawingView';
import {Col} from 'react-bootstrap';

const DrawingViewEx = () => {
  return (
    <>
      <ComponentHeader
        title='Drawing View Google Map'
        description='A wrapper around google.maps.drawing.DrawingManager'
        refUrl='https://developers.google.com/maps/documentation/javascript/reference/#DrawingManager/'
      />

      <AppRowSimpleContainer>
        <Col xs={12}>
          <ComponentCard
            title='Drawing View Map'
            component={DrawingView}
            source={DrawingViewSource}
          />
        </Col>
      </AppRowSimpleContainer>
    </>
  );
};

export default DrawingViewEx;
