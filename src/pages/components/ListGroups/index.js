import React from 'react';
import AppComponentHeader from '@crema/core/AppComponentHeader';
import AppRowContainer from '@crema/core/AppRowContainer';
import {Col} from 'react-bootstrap';
import AppComponentCard from '@crema/core/AppComponentCard';

import Basic from './Basic';
import BasicSource from '!raw-loader!./Basic';
import Active from './Active';
import ActiveSource from '!raw-loader!./Active';
import Disabled from './Disabled';
import DisabledSource from '!raw-loader!./Disabled';
import Actionable from './Actionable';
import ActionableSource from '!raw-loader!./Actionable';
import Flush from './Flush';
import FlushSource from '!raw-loader!./Flush';
import NumberedDemo from './NumberedDemo';
import NumberedDemoSource from '!raw-loader!./NumberedDemo';
import NumberedDemo2 from './NumberedDemo2';
import NumberedDemo2Source from '!raw-loader!./NumberedDemo2';
import HorizontalDemo from './HorizontalDemo';
import HorizontalDemoSource from '!raw-loader!./HorizontalDemo';
import HorizontalDemo2 from './HorizontalDemo2';
import HorizontalDemo2Source from '!raw-loader!./HorizontalDemo2';
import Contextual from './Contextual';
import ContextualSource from '!raw-loader!./Contextual';
import Tabbed from './Tabbed';
import TabbedSource from '!raw-loader!./Tabbed';

const ListGroups = () => {
  return (
    <>
      <AppComponentHeader
        title='List Groups'
        description='List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within.'
        refUrl='https://react-bootstrap.github.io/components/list-group/'
      />

      <AppRowContainer>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Basic Example'
            component={Basic}
            source={BasicSource}
            noScrollbar
            description=''
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Active items'
            component={Active}
            source={ActiveSource}
            noScrollbar
            description='Set the active prop to indicate the list groups current active selection.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Disabled items'
            component={Disabled}
            source={DisabledSource}
            noScrollbar
            description='Set the disabled prop to prevent actions on a <ListGroup.Item>. For elements that arent naturally disable-able (like anchors) onClick handlers are added that call preventDefault to mimick disabled behavior. '
          />
        </Col>

        <Col xs={12} md={6}>
          <AppComponentCard
            title='Flush'
            component={Flush}
            source={FlushSource}
            noScrollbar
            description='Add the flush variant to remove outer borders and rounded corners to render list group items edge-to-edge in a parent container such as a Card.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Actionable'
            component={Actionable}
            source={ActionableSource}
            noScrollbar
            description='Toggle the action prop to create actionable list group items, with disabled, hover and active styles.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Numbered'
            component={NumberedDemo}
            source={NumberedDemoSource}
            noScrollbar
            description='Add the numbered prop to opt into numbered list group items. Numbers are generated via CSS (as opposed to a <ol>s default browser styling) for better placement inside list group items and to allow for better customization.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Numbered 2'
            component={NumberedDemo2}
            source={NumberedDemo2Source}
            noScrollbar
            description='These work great with custom content as well.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='HorizontalDemo2'
            component={HorizontalDemo2}
            source={HorizontalDemo2Source}
            noScrollbar
            description='There are responsive variants to horizontal: setting it to {sm|md|lg|xl|xxl} makes the list group horizontal starting at that breakpoint’s min-width.'
          />
        </Col>

        <Col xs={12} md={6}>
          <AppComponentCard
            title='Horizontal'
            component={HorizontalDemo}
            source={HorizontalDemoSource}
            noScrollbar
            description='Use the horizontal prop to make the ListGroup render horizontally. Currently horizontal list groups cannot be combined with flush list groups.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Contextual'
            component={Contextual}
            source={ContextualSource}
            noScrollbar
            description='Use contextual variants on <ListGroup.Item>s to style them with a stateful background and color.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Tabbed'
            component={Tabbed}
            source={TabbedSource}
            noScrollbar
            description='You can also use the Tab components to create ARIA compliant tabbable interfaces with the <ListGroup> component.'
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default ListGroups;
