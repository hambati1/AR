import React from 'react';
import AppComponentHeader from '@crema/core/AppComponentHeader';
import AppRowContainer from '@crema/core/AppRowContainer';
import {Col} from 'react-bootstrap';
import AppComponentCard from '@crema/core/AppComponentCard';

import Close from './Close';
import CloseSource from '!raw-loader!./Close';
import Disabled from './Disabled';
import DisabledSource from '!raw-loader!./Disabled';
import Variants from './Variants';
import VariantsSource from '!raw-loader!./Variants';
import Accessibility from './Accessibility';
import AccessibilitySource from '!raw-loader!./Accessibility';

const CloseButton = () => {
  return (
    <>
      <AppComponentHeader
        title='CloseButton'
        description=''
        refUrl='https://react-bootstrap.github.io/components/close-button/'
      />

      <AppRowContainer>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Close Button'
            component={Close}
            source={CloseSource}
            noScrollbar
            description='A generic close button for dismissing content such as modals and alerts.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Disabled state'
            component={Disabled}
            source={DisabledSource}
            noScrollbar
            description='Bootstrap adds relevant styling to a disabled close button to prevent user interactions.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Variants'
            component={Variants}
            source={VariantsSource}
            noScrollbar
            description='Change the default dark color to white using variant="white".'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Accessibility'
            component={Accessibility}
            source={AccessibilitySource}
            noScrollbar
            description='To ensure the maximum accessibility for Close Button components, it is recommended that you provide relevant text for screen readers. The example below provides an example of accessible usage of this component by way of the aria-label property.'
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default CloseButton;
