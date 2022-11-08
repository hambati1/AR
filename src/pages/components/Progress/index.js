import React from 'react';
import AppComponentHeader from '@crema/core/AppComponentHeader';
import AppRowContainer from '@crema/core/AppRowContainer';
import {Col} from 'react-bootstrap';
import AppComponentCard from '@crema/core/AppComponentCard';

import Example from './Example';
import ExampleSource from '!raw-loader!./Example';
import With from './With';
import WithSource from '!raw-loader!./With';
import ScreenDemo from './ScreenDemo';
import ScreenDemoSource from '!raw-loader!./ScreenDemo';
import ContextualAlternatives from './ContextualAlternatives';
import ContextualAlternativesSource from '!raw-loader!./ContextualAlternatives';
import Striped from './Striped';
import StripedSource from '!raw-loader!./Striped';
import AnimatedDemo from './AnimatedDemo';
import AnimatedDemoSource from '!raw-loader!./AnimatedDemo';
import Stacked from './Stacked';
import StackedSource from '!raw-loader!./Stacked';

const Progress = () => {
  return (
    <>
      <AppComponentHeader
        title='Progress'
        description='Provide up-to-date feedback on the progress of a workflow or action with simple yet flexible progress bars.'
        refUrl='https://react-bootstrap.github.io/components/progress/'
      />

      <AppRowContainer>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Example'
            component={Example}
            source={ExampleSource}
            noScrollbar
            description='Default progress bar.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='With'
            component={With}
            source={WithSource}
            noScrollbar
            description='Add a label prop to show a visible percentage. For low percentages, consider adding a min-width to ensure the labels text is fully visible.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='ScreenDemo'
            component={ScreenDemo}
            source={ScreenDemoSource}
            noScrollbar
            description='Add a visuallyHidden prop to hide the label visually.'
          />
        </Col>

        <Col xs={12} md={6}>
          <AppComponentCard
            title='Animated'
            component={AnimatedDemo}
            source={AnimatedDemoSource}
            noScrollbar
            description='Add animated prop to animate the stripes right to left. Not available in IE9 and below.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Contextual Alternatives'
            component={ContextualAlternatives}
            source={ContextualAlternativesSource}
            noScrollbar
            description='Add a visuallyHidden prop to hide the label visually.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Striped'
            component={Striped}
            source={StripedSource}
            noScrollbar
            description='Uses a gradient to create a striped effect. Not available in IE8.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Stacked'
            component={Stacked}
            source={StackedSource}
            noScrollbar
            description='Nest <ProgressBar />s to stack them.'
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Progress;
