import React from 'react';
import AppComponentHeader from '@crema/core/AppComponentHeader';
import AppRowContainer from '@crema/core/AppRowContainer';
import {Col} from 'react-bootstrap';
import AppComponentCard from '@crema/core/AppComponentCard';

import SpinnersDemo from './SpinnersDemo';
import SpinnersDemoSource from '!raw-loader!./SpinnersDemo';
import Animations from './Animations';
import AnimationsSource from '!raw-loader!./Animations';
import GrowSpinner from './GrowSpinner';
import GrowSpinnerSource from '!raw-loader!./GrowSpinner';
import VariantsDemo from './VariantsDemo';
import VariantsDemoSource from '!raw-loader!./VariantsDemo';
import SizingDemo from './SizingDemo';
import SizingDemoSource from '!raw-loader!./SizingDemo';
import ButtonsDemo from './ButtonsDemo';
import ButtonsDemoSource from '!raw-loader!./ButtonsDemo';
import Accessibility from './Accessibility';
import AccessibilitySource from '!raw-loader!./Accessibility';

const Spinners = () => {
  return (
    <>
      <AppComponentHeader
        title='Spinners'
        description=''
        refUrl='https://react-bootstrap.github.io/components/spinners/'
      />

      <AppRowContainer>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Spinners'
            component={SpinnersDemo}
            source={SpinnersDemoSource}
            noScrollbar
            description='Spinners can be used to show the loading state in your projects.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Animations'
            component={Animations}
            source={AnimationsSource}
            noScrollbar
            description='Bootstrap offers two animation styles for spinners. The animation style can be configured with the animation property. An animation style must always be provided when creating a spinner.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Grow Spinner'
            component={GrowSpinner}
            source={GrowSpinnerSource}
            noScrollbar
            description=''
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Variants'
            component={VariantsDemo}
            source={VariantsDemoSource}
            noScrollbar
            description='All standard visual variants are available for both animation styles by setting the variant property. Alternatively spinners can be custom sized with the style property, or custom CSS classes.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Sizing'
            component={SizingDemo}
            source={SizingDemoSource}
            noScrollbar
            description='In addition to the standard size, a smaller additional preconfigured size is available by configuring the size property to sm.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Buttons'
            component={ButtonsDemo}
            source={ButtonsDemoSource}
            noScrollbar
            description='Like the original Bootstrap spinners, these can also be used with buttons. To use this component out-of-the-box it is recommended you change the element type to span by configuring the as property when using spinners inside buttons.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Accessibility'
            component={Accessibility}
            source={AccessibilitySource}
            noScrollbar
            description='The example below provides an example of accessible usage of this component.'
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Spinners;
