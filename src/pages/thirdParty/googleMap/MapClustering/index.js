import React from 'react';

import ComponentCard from '@crema/core/AppComponentCard';
import ComponentHeader from '@crema/core/AppComponentHeader';
import AppRowSimpleContainer from '@crema/core/AppRowContainer/AppRowSimpleContainer';

import MapClustering from './Components/MarkerClustererEx.js';
import MapClusteringSource from '!raw-loader!./Components/MarkerClustererEx.js';
import {Col} from 'react-bootstrap';

const MapClusteringEx = () => {
  return (
    <>
      <ComponentHeader
        title='Marker Clusterer'
        description='A wrapper around MarkerClusterer'
        refUrl='https://github.com/mahnunchik/markerclustererplus/blob/master/docs/reference.html'
      />

      <AppRowSimpleContainer>
        <Col xs={12}>
          <ComponentCard
            title='Marker Clusterer Map'
            component={MapClustering}
            source={MapClusteringSource}
          />
        </Col>
      </AppRowSimpleContainer>
    </>
  );
};

export default MapClusteringEx;
