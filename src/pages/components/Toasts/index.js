import React from 'react';
import AppComponentHeader from '@crema/core/AppComponentHeader';
import AppRowContainer from '@crema/core/AppRowContainer';
import {Col} from 'react-bootstrap';
import AppComponentCard from '@crema/core/AppComponentCard';

import Basic from './Basic';
import BasicSource from '!raw-loader!./Basic';
import DismissibleDemo from './DismissibleDemo';
import DismissibleDemoSource from '!raw-loader!./DismissibleDemo';
import Stacking from './Stacking';
import StackingSource from '!raw-loader!./Stacking';
import Placement from './Placement';
import PlacementSource from '!raw-loader!./Placement';
import Autohide from './Autohide';
import AutohideSource from '!raw-loader!./Autohide';
import Contextual from './Contextual';
import ContextualSource from '!raw-loader!./Contextual';

const Toasts = () => {
  return (
    <>
      <AppComponentHeader
        title='Toasts'
        description='Push notifications to your visitors with a toast, a lightweight and easily customizable alert message.'
        refUrl='https://react-bootstrap.github.io/components/toasts/'
      />

      <AppRowContainer>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Basic'
            component={Basic}
            source={BasicSource}
            noScrollbar
            description='To encourage extensible and predictable toasts, we recommend a header and body. Toast headers use display: flex, allowing easy alignment of content thanks to our margin and flexbox utilities.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Dismissible'
            component={DismissibleDemo}
            source={DismissibleDemoSource}
            noScrollbar
            description=''
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Stacking'
            component={Stacking}
            source={StackingSource}
            noScrollbar
            description='When you have multiple toasts, we default to vertically stacking them in a readable manner.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Placement'
            component={Placement}
            source={PlacementSource}
            noScrollbar
            description='For systems that generate more notifications, consider using a wrapping element so they can easily stack.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Autohide'
            component={Autohide}
            source={AutohideSource}
            noScrollbar
            description='A Toast can also automatically hide after X milliseconds.'
          />
        </Col>

        <Col xs={12} md={6}>
          <AppComponentCard
            title='Contextual'
            component={Contextual}
            source={ContextualSource}
            noScrollbar
            description='A Toast can also automatically hide after X milliseconds.'
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Toasts;
