import React from 'react';

import {Col} from 'react-bootstrap';
import ComponentCard from '@crema/core/AppComponentCard';
import ComponentHeader from '@crema/core/AppComponentHeader';

import AppRowSimpleContainer from '@crema/core/AppRowContainer/AppRowSimpleContainer';
import Selectable from './Components/Selectable';
import SelectableSource from '!raw-loader!./Components/Selectable';

const SelectableCalendar = () => {
  return (
    <>
      <ComponentHeader
        title='React Big Calendar'
        refUrl='http://intljusticemission.github.io/react-big-calendar/examples/index.html#basic'
      />

      <AppRowSimpleContainer>
        <Col xs={12}>
          <ComponentCard
            title='Selectable Calendar'
            component={Selectable}
            source={SelectableSource}
          />
        </Col>
      </AppRowSimpleContainer>
    </>
  );
};

export default SelectableCalendar;
