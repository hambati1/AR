import React from 'react';
import AppComponentHeader from '@crema/core/AppComponentHeader';
import AppRowContainer from '@crema/core/AppRowContainer';
import {Col} from 'react-bootstrap';
import AppComponentCard from '@crema/core/AppComponentCard';

import Example from './Example';
import ExampleSource from '!raw-loader!./Example';
import HowDemo from './HowDemo';
import HowDemoSource from '!raw-loader!./HowDemo';
import Width from './Width';
import WidthSource from '!raw-loader!./Width';
import Colors from './Colors';
import ColorsSource from '!raw-loader!./Colors';
import Sizing from './Sizing';
import SizingSource from '!raw-loader!./Sizing';
import Animation from './Animation';
import AnimationSource from '!raw-loader!./Animation';

const PlaceHolders = () => {
  return (
    <>
      <AppComponentHeader
        title='PlaceHolders'
        description='Use loading placeholders (otherwise known as "skeletons") for your components or pages to indicate something may still be loading'
        refUrl='https://react-bootstrap.github.io/components/placeholder/'
      />

      <AppRowContainer>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Example'
            component={Example}
            source={ExampleSource}
            noScrollbar
            description='In the example below, we take a typical card component and recreate it with placeholders applied to create a “loading card”. Size and proportions are the same between the two.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Colors'
            component={Colors}
            source={ColorsSource}
            noScrollbar
            description='By default, the Placeholder uses currentColor. This can be overriden with a custom color or utility class.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='HowDemo'
            component={HowDemo}
            source={HowDemoSource}
            noScrollbar
            description='Create placeholders with the Placeholder component and a grid column prop (e.g., xs={6}) to set the width.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Width'
            component={Width}
            source={WidthSource}
            noScrollbar
            description='You can change the width through grid column classes, width utilities, or inline styles.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Sizing'
            component={Sizing}
            source={SizingSource}
            noScrollbar
            description='The size of Placeholders are based on the typographic style of the parent element. Customize them with sizing props: lg, sm, or xs.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Animation'
            component={Animation}
            source={AnimationSource}
            noScrollbar
            description='Animate placeholders by setting the prop animation to glow or wave to better convey the perception of something being actively loaded.'
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default PlaceHolders;
