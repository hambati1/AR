import React from 'react';
import AppComponentHeader from '@crema/core/AppComponentHeader';
import AppRowContainer from '@crema/core/AppRowContainer';
import {Col} from 'react-bootstrap';
import AppComponentCard from '@crema/core/AppComponentCard';

import Examples from './Examples';
import ExamplesSource from '!raw-loader!./Examples';
import Live from './Live';
import LiveSource from '!raw-loader!./Live';
import Without from './Without';
import WithoutSource from '!raw-loader!./Without';
import Vertically from './Vertically';
import VerticallySource from '!raw-loader!./Vertically';
import Using from './Using';
import UsingSource from '!raw-loader!./Using';
import Optional from './Optional';
import OptionalSource from '!raw-loader!./Optional';
import Fullscreen from './Fullscreen';
import FullscreenSource from '!raw-loader!./Fullscreen';
import Sizing from './Sizing';
import SizingSource from '!raw-loader!./Sizing';

const Modals = () => {
  return (
    <>
      <AppComponentHeader
        title='Modals'
        description='Add dialogs to your site for lightboxes, user notifications, or completely custom content.'
        refUrl='https://react-bootstrap.github.io/components/modal/'
      />

      <AppRowContainer>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Static Markup'
            component={Examples}
            source={ExamplesSource}
            noScrollbar
            description='Below is a static modal dialog (without the positioning) to demonstrate the look and feel of the Modal.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Live demo'
            component={Live}
            source={LiveSource}
            noScrollbar
            description='When backdrop is set to static, the modal will not close when clicking outside it. Click the button below to try it.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Without Animation'
            component={Without}
            source={WithoutSource}
            noScrollbar
            description='A Modal can also be without an animation. For that set the "animation" prop to false.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Vertically centered'
            component={Vertically}
            source={VerticallySource}
            noScrollbar
            description='You can vertically center a modal by passing the "centered" prop.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Using'
            component={Using}
            source={UsingSource}
            noScrollbar
            description='You can use grid layouts within a model using regular grid components inside the modal content.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Optional Sizes'
            component={Optional}
            source={OptionalSource}
            noScrollbar
            description='You can specify a bootstrap large or small modal by using the size prop.'
          />
        </Col>
        <Col xs={12}>
          <AppComponentCard
            title='Fullscreen'
            component={Fullscreen}
            source={FullscreenSource}
            noScrollbar
            description='You can use the fullscreen prop to make the modal fullscreen. Specifying a breakpoint will only set the modal as fullscreen below the breakpoint size.'
          />
        </Col>
        <Col xs={12}>
          <AppComponentCard
            title='Sizing modals using custom CSS'
            component={Sizing}
            source={SizingSource}
            noScrollbar
            description='You can apply custom css to the modal dialog div using the "dialogClassName" prop. Example is using a custom css class with width set to 90%.'
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Modals;
