import React from 'react';
import AppComponentHeader from '@crema/core/AppComponentHeader';
import AppRowContainer from '@crema/core/AppRowContainer';
import {Col} from 'react-bootstrap';
import AppComponentCard from '@crema/core/AppComponentCard';

import Basic from './Basic';
import BasicSource from '!raw-loader!./Basic';
import Fully from './Fully';
import FullySource from '!raw-loader!./Fully';
import Flush from './Flush';
import FlushSource from '!raw-loader!./Flush';
import Custom from './Custom';
import CustomSource from '!raw-loader!./Custom';
import Toggle from './Toggle';
import ToggleSource from '!raw-loader!./Toggle';

const Accordion = () => {
  return (
    <>
      <AppComponentHeader
        title='Accordion'
        description='Build vertically collapsing accordions in combination with the Collapse component.'
        refUrl='https://react-bootstrap.github.io/components/accordion/'
      />

      <AppRowContainer>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Basic Examples'
            component={Basic}
            source={BasicSource}
            noScrollbar
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Flush'
            component={Flush}
            source={FlushSource}
            noScrollbar
            description='Add flush to remove the default background-color, some borders, and some rounded corners to render accordions edge-to-edge with their parent container.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Custom Accordions'
            component={Custom}
            source={CustomSource}
            noScrollbar
            description='You can still create card-based accordions like those in Bootstrap 4. You can hook into the Accordion toggle functionality via useAccordionButton to make custom toggle components.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Custom Toggle with Expansion Awareness'
            component={Toggle}
            source={ToggleSource}
            noScrollbar
            description='You may wish to have different styles for the toggle if its associated section is expanded, this can be achieved with a custom toggle that is context aware and also takes advantage of the useAccordionButton hook. '
          />
        </Col>

        <Col xs={12} md={6}>
          <AppComponentCard
            title='Fully Collapsed State'
            component={Fully}
            source={FullySource}
            noScrollbar
            description='If you want your Accordion to start in a fully-collapsed state, then simply dont pass in a defaultActiveKey prop to Accordion.'
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Accordion;
