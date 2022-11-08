import React from 'react';
import AppComponentHeader from '@crema/core/AppComponentHeader';
import AppRowContainer from '@crema/core/AppRowContainer';
import {Col} from 'react-bootstrap';
import AppComponentCard from '@crema/core/AppComponentCard';

import Overview from './Overview';
import OverviewSource from '!raw-loader!./Overview';
import OverlayTriggerDemo from './OverlayTriggerDemo';
import OverlayTriggerDemoSource from '!raw-loader!./OverlayTriggerDemo';
import Customizing from './Customizing';
import CustomizingSource from '!raw-loader!./Customizing';
import Tooltips from './Tooltips';
import TooltipsSource from '!raw-loader!./Tooltips';
import Tooltips2 from './Tooltips2';
import Tooltips2Source from '!raw-loader!./Tooltips2';
import Popovers from './Popovers';
import PopoversSource from '!raw-loader!./Popovers';
import Disabled from './Disabled';
import DisabledSource from '!raw-loader!./Disabled';
import Changing from './Changing';
import ChangingSource from '!raw-loader!./Changing';
import UpdatingPosition from './UpdatingPosition';
import UpdatingPositionSource from '!raw-loader!./UpdatingPosition';

const Overlays = () => {
  return (
    <>
      <AppComponentHeader
        title='Overlays'
        description='A set of components for positioning beautiful overlays, tooltips, popovers, and anything else you need.'
        refUrl='https://react-bootstrap.github.io/components/overlays/'
      />

      <AppRowContainer>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Overview'
            component={Overview}
            source={OverviewSource}
            noScrollbar
            description='Things to know about the React-Boostrap Overlay components.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Overlay Trigger'
            component={OverlayTriggerDemo}
            source={OverlayTriggerDemoSource}
            noScrollbar
            description='Since the above pattern is pretty common, but verbose, weve included <OverlayTrigger> component to help with common use-cases. It even has functionality to delayed show or hides, and a few different "trigger" events you can mix and match. '
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Customizing trigger behavior'
            component={Customizing}
            source={CustomizingSource}
            noScrollbar
            description='For more advanced behaviors <OverlayTrigger> accepts a function child that passes in the injected ref and event handlers that correspond to the configured trigger prop.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Tooltips'
            component={Tooltips}
            source={TooltipsSource}
            noScrollbar
            description='A tooltip component for a more stylish alternative to that anchor tag title attribute.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Tooltips 2'
            component={Tooltips2}
            source={Tooltips2Source}
            noScrollbar
            description='Or pass a Tooltip element to OverlayTrigger instead.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Popovers'
            component={Popovers}
            source={PopoversSource}
            noScrollbar
            description='A popover component, like those found in iOS.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Disabled'
            component={Disabled}
            source={DisabledSource}
            noScrollbar
            description='Elements with the disabled attribute aren’t interactive, meaning users cannot hover or click them to trigger a popover (or tooltip).'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Changing containers'
            component={Changing}
            source={ChangingSource}
            noScrollbar
            description='You can specify a container to control the DOM element the overlay is appended to. This is especially useful when styles conflict with your Overlays.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Updating position dynamically'
            component={UpdatingPosition}
            source={UpdatingPositionSource}
            noScrollbar
            description='Since we cant know every time your overlay changes size, to reposition it, you need to take manual action if you want to update the position of an Overlay in response to a change.'
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Overlays;
