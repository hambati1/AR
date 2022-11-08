import React from 'react';

import ComponentCard from '@crema/core/AppComponentCard';
import ComponentHeader from '@crema/core/AppComponentHeader';
import AppRowSimpleContainer from '@crema/core/AppRowContainer/AppRowSimpleContainer';

import GeoLocation from './Components/GeoLocation';
import SimpleMapSource from '!raw-loader!./Components/GeoLocation';
import {Col} from 'react-bootstrap';

const GeoLocationEx = () => {
  return (
    <>
      <ComponentHeader
        title='Google Map'
        refUrl='http://google-map-react.github.io/google-map-react/map/balderdash/'
      />

      <AppRowSimpleContainer>
        <Col xs={12}>
          <ComponentCard
            title='Simple Map'
            component={GeoLocation}
            source={SimpleMapSource}
          />
        </Col>
      </AppRowSimpleContainer>
    </>
  );
};

export default GeoLocationEx;
