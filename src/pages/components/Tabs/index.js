import React from 'react';
import AppComponentHeader from '@crema/core/AppComponentHeader';
import AppRowContainer from '@crema/core/AppRowContainer';
import {Col} from 'react-bootstrap';
import AppComponentCard from '@crema/core/AppComponentCard';

import Examples from './Examples';
import ExamplesSource from '!raw-loader!./Examples';
import Controlled from './Controlled';
import ControlledSource from '!raw-loader!./Controlled';
import Animation from './Animation';
import AnimationSource from '!raw-loader!./Animation';
import Custom from './Custom';
import CustomSource from '!raw-loader!./Custom';

const Tabs = () => {
  return (
    <>
      <AppComponentHeader
        title='Tabbed components'
        description='Dynamic tabbed interfaces'
        refUrl='https://react-bootstrap.github.io/components/tabs/'
      />

      <AppRowContainer>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Examples'
            component={Examples}
            source={ExamplesSource}
            noScrollbar
            description='Displaying related images and text with the Figure component.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Controlled'
            component={Controlled}
            source={ControlledSource}
            noScrollbar
            description='Tabs can be controlled directly when you want to handle the selection logic personally.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='No animation'
            component={Animation}
            source={AnimationSource}
            noScrollbar
            description='Set the transition prop to false'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Custom'
            component={Custom}
            source={CustomSource}
            noScrollbar
            description='For more complex layouts the flexible TabContainer, TabContent, and TabPane components along with any style of Nav allow you to quickly piece together your own Tabs component with additional markup needed.'
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Tabs;
