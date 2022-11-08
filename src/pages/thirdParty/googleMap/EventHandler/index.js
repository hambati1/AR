import React from 'react';

import ComponentCard from '@crema/core/AppComponentCard';
import ComponentHeader from '@crema/core/AppComponentHeader';
import AppRowSimpleContainer from '@crema/core/AppRowContainer/AppRowSimpleContainer';

import EventHandler from './Components/EventHandler';
import EventHandlerSource from '!raw-loader!./Components/EventHandler';
import {Col} from 'react-bootstrap';

const EventHandlerEx = () => {
  return (
    <>
      <ComponentHeader
        title='Event Handler Google Map'
        refUrl='http://google-map-react.github.io/google-map-react/map/balderdash/'
      />

      <AppRowSimpleContainer>
        <Col xs={12}>
          <ComponentCard
            title='Event Handler Map'
            component={EventHandler}
            source={EventHandlerSource}
          />
        </Col>
      </AppRowSimpleContainer>
    </>
  );
};

export default EventHandlerEx;
