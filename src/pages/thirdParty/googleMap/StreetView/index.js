import React from 'react';

import ComponentCard from '@crema/core/AppComponentCard';
import ComponentHeader from '@crema/core/AppComponentHeader';
import AppRowSimpleContainer from '@crema/core/AppRowContainer/AppRowSimpleContainer';

import StreetViewMap from './Components/StreetViewPanoramaEx';
import StreetViewMapSource from '!raw-loader!./Components/StreetViewPanoramaEx';
import {Col} from 'react-bootstrap';

const StreetView = () => {
  return (
    <>
      <ComponentHeader
        title='StreetView Map'
        description='A wrapper around google.maps.StreetViewPanorama'
        refUrl='https://developers.google.com/maps/documentation/javascript/3.exp/reference#StreetViewPanorama/'
      />

      <AppRowSimpleContainer>
        <Col xs={12}>
          <ComponentCard
            title='StreetView Map'
            component={StreetViewMap}
            source={StreetViewMapSource}
          />
        </Col>
      </AppRowSimpleContainer>
    </>
  );
};

export default StreetView;
