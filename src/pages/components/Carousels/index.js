import React from 'react';
import AppComponentHeader from '@crema/core/AppComponentHeader';
import AppRowContainer from '@crema/core/AppRowContainer';
import {Col} from 'react-bootstrap';
import AppComponentCard from '@crema/core/AppComponentCard';

import Example from './Example';
import ExampleSource from '!raw-loader!./Example';
import Controlled from './Controlled';
import ControlledSource from '!raw-loader!./Controlled';
import Crossfade from './Crossfade';
import CrossfadeSource from '!raw-loader!./Crossfade';
import Individual from './Individual';
import IndividualSource from '!raw-loader!./Individual';
import Dark from './Dark';
import DarkSource from '!raw-loader!./Dark';

const Carousels = () => {
  return (
    <>
      <AppComponentHeader
        title='Carousels'
        description='Carousels don’t automatically normalize slide dimensions. As such, you may need to use additional utilities or custom styles to appropriately size content. While carousels support previous/next controls and indicators, they’re not explicitly required. Add and customize as you see fit.'
        refUrl='https://react-bootstrap.github.io/components/carousel/'
      />

      <AppRowContainer>
        <Col xs={12}>
          <AppComponentCard
            title='Example'
            component={Example}
            source={ExampleSource}
            noScrollbar
          />
        </Col>
        <Col xs={12}>
          <AppComponentCard
            title='Controlled'
            component={Controlled}
            source={ControlledSource}
            noScrollbar
            description='You can also control the Carousel state, via the activeIndex prop and onSelect handler.'
          />
        </Col>
        <Col xs={12}>
          <AppComponentCard
            title='Crossfade'
            component={Crossfade}
            source={CrossfadeSource}
            noScrollbar
            description='Add the fade prop to your carousel to animate slides with a fade transition instead of a slide.'
          />
        </Col>
        <Col xs={12}>
          <AppComponentCard
            title='Individual Item Intervals'
            component={Individual}
            source={IndividualSource}
            noScrollbar
            description='You can specify individual intervals for each carousel item via the interval prop.'
          />
        </Col>
        <Col xs={12}>
          <AppComponentCard
            title='Dark variant'
            component={Dark}
            source={DarkSource}
            noScrollbar
            description='Add variant="dark" to the Carousel for darker controls, indicators, and captions.'
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Carousels;
