import React from 'react';

import ComponentCard from '@crema/core/AppComponentCard';
import ComponentHeader from '@crema/core/AppComponentHeader';
import AppRowSimpleContainer from '@crema/core/AppRowContainer/AppRowSimpleContainer';

import MapWithASearchBox from './Components/MapWithASearchBox';
import MapWithASearchBoxSource from '!raw-loader!./Components/MapWithASearchBox';
import {Col} from 'react-bootstrap';

const MapWithSearchBox = () => {
  return (
    <>
      <ComponentHeader
        title='Google Map with SearchBox'
        description='A wrapper around google.maps.places.SearchBox on the map'
        refUrl='https://developers.google.com/maps/documentation/javascript/3.exp/reference#SearchBox/'
      />

      <AppRowSimpleContainer>
        <Col xs={12}>
          <ComponentCard
            title='Map With Search Box'
            component={MapWithASearchBox}
            source={MapWithASearchBoxSource}
          />
        </Col>
      </AppRowSimpleContainer>
    </>
  );
};

export default MapWithSearchBox;
