import React from 'react';
import AppComponentHeader from '@crema/core/AppComponentHeader';
import AppRowContainer from '@crema/core/AppRowContainer';
import {Col} from 'react-bootstrap';
import AppComponentCard from '@crema/core/AppComponentCard';

import BaseDemo from './BaseDemo';
import BaseDemoSource from '!raw-loader!./BaseDemo';
import BaseDemo2 from './BaseDemo2';
import BaseDemo2Source from '!raw-loader!./BaseDemo2';
import Alignment from './Alignment';
import AlignmentSource from '!raw-loader!./Alignment';
import Vertical from './Vertical';
import VerticalSource from '!raw-loader!./Vertical';
import Tabs from './Tabs';
import TabsSource from '!raw-loader!./Tabs';
import Pills from './Pills';
import PillsSource from '!raw-loader!./Pills';
import Fill from './Fill';
import FillSource from '!raw-loader!./Fill';
import UsingDemo from './UsingDemo';
import UsingDemoSource from '!raw-loader!./UsingDemo';

const Navs = () => {
  return (
    <>
      <AppComponentHeader
        title='Navs'
        description=''
        refUrl='https://react-bootstrap.github.io/components/navs/'
      />

      <AppRowContainer>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Base Nav'
            component={BaseDemo}
            source={BaseDemoSource}
            noScrollbar
            description='Navigation bits in Bootstrap all share a general Nav component and styles. Swap variants to switch between each style. The base Nav component is built with flexbox and provide a strong foundation for building all types of navigation components.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Base Nav2'
            component={BaseDemo2}
            source={BaseDemo2Source}
            noScrollbar
            description='When a <ul> is appropriate you can render one via the as prop; be sure to also set your items to <li> as well!'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Alignment and orientation'
            component={Alignment}
            source={AlignmentSource}
            noScrollbar
            description='You can control the the direction and orientation of the Nav by making use of the flexbox layout utility classes. By default, navs are left-aligned, but that is easily changed to center or right-aligned.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Vertical'
            component={Vertical}
            source={VerticalSource}
            noScrollbar
            description='Create stacked navs by changing the flex item direction with the .flex-column class, or your own css. You can even use the responsive versions to stack in some viewports but not others (e.g. .flex-sm-column).'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Tabs'
            component={Tabs}
            source={TabsSource}
            noScrollbar
            description='Visually represent nav items as "tabs". This style pairs nicely with tabbable regions created by our Tab components.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Pills'
            component={Pills}
            source={PillsSource}
            noScrollbar
            description='An alternative visual variant.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Fill'
            component={Fill}
            source={FillSource}
            noScrollbar
            description='An alternative visual variant.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Using dropdowns'
            component={UsingDemo}
            source={UsingDemoSource}
            noScrollbar
            description='You can mix and match the Dropdown components with the NavLink and NavItem components to create a Dropdown that plays well in a Nav component'
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Navs;
