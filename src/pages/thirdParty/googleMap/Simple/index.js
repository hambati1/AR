import React from 'react';

import ComponentCard from '@crema/core/AppComponentCard';
import ComponentHeader from '@crema/core/AppComponentHeader';

import SimpleMap from './Components/SimpleMap';
import SimpleMapSource from '!raw-loader!./Components/SimpleMap';
import AppRowContainer from '@crema/core/AppRowContainer/AppRowSimpleContainer';
import {Col} from 'react-bootstrap';

const TransferLists = () => {
  return (
    <>
      <ComponentHeader
        title='Google Map'
        description='A wrapper around google.maps.Map'
        refUrl='https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map/'
      />

      <AppRowContainer>
        <Col xs={12}>
          <ComponentCard
            title='Simple Map'
            component={SimpleMap}
            source={SimpleMapSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default TransferLists;
