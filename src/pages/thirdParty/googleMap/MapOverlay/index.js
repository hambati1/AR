import React from 'react';

import ComponentCard from '@crema/core/AppComponentCard';
import ComponentHeader from '@crema/core/AppComponentHeader';
import AppRowSimpleContainer from '@crema/core/AppRowContainer/AppRowSimpleContainer';

import MapOverlay from './Components/MapOverlay';
import MapOverlaySource from '!raw-loader!./Components/MapOverlay';
import {Col} from 'react-bootstrap';

const MapOverlayEx = () => {
  return (
    <>
      <ComponentHeader
        title='OverlayView Map'
        description='A wrapper around google.maps.OverlayView'
        refUrl='https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView'
      />

      <AppRowSimpleContainer>
        <Col xs={12}>
          <ComponentCard
            title='Map Overlay'
            component={MapOverlay}
            source={MapOverlaySource}
          />
        </Col>
      </AppRowSimpleContainer>
    </>
  );
};

export default MapOverlayEx;
