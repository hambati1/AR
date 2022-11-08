import React from 'react';

import ComponentCard from '@crema/core/AppComponentCard';
import ComponentHeader from '@crema/core/AppComponentHeader';
import AppRowSimpleContainer from '@crema/core/AppRowContainer/AppRowSimpleContainer';

import Popup from './Components/Popup';
import PopupSource from '!raw-loader!./Components/Popup';
import {Col} from 'react-bootstrap';

const PopupCalendar = () => {
  return (
    <>
      <ComponentHeader
        title='React Big Calendar'
        refUrl='http://intljusticemission.github.io/react-big-calendar/examples/index.html#basic'
      />

      <AppRowSimpleContainer>
        <Col xs={12}>
          <ComponentCard
            title='Popup Calendar'
            component={Popup}
            source={PopupSource}
          />
        </Col>
      </AppRowSimpleContainer>
    </>
  );
};

export default PopupCalendar;
