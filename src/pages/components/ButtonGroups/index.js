import React from 'react';
import AppComponentHeader from '@crema/core/AppComponentHeader';
import AppRowContainer from '@crema/core/AppRowContainer';
import {Col} from 'react-bootstrap';
import AppComponentCard from '@crema/core/AppComponentCard';

import Basic from './Basic';
import BasicSource from '!raw-loader!./Basic';
import Toolbar from './Toolbar';
import ToolbarSource from '!raw-loader!./Toolbar';
import Groups from './Groups';
import GroupsSource from '!raw-loader!./Groups';
import Sizing from './Sizing';
import SizingSource from '!raw-loader!./Sizing';
import Nesting from './Nesting';
import NestingSource from '!raw-loader!./Nesting';
import Vertical from './Vertical';
import VerticalSource from '!raw-loader!./Vertical';

const ButtonGroups = () => {
  return (
    <>
      <AppComponentHeader
        title='Button Groups'
        description='Group a series of buttons together on a single line with the button group.'
        refUrl='https://react-bootstrap.github.io/components/button-group/'
      />

      <AppRowContainer>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Basic example'
            component={Basic}
            source={BasicSource}
            noScrollbar
            description='Wrap a series of <Button>s in a <ButtonGroup>.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Button toolbar'
            component={Toolbar}
            source={ToolbarSource}
            noScrollbar
            description='Combine sets of <ButtonGroup>s into a <ButtonToolbar> for more complex components.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Button toolbar2'
            component={Groups}
            source={GroupsSource}
            noScrollbar
            description='Feel free to mix input groups with button groups in your toolbars. Similar to the example above, you’ll likely need some utilities though to space things properly.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Sizing'
            component={Sizing}
            source={SizingSource}
            noScrollbar
            description='Instead of applying button sizing props to every button in a group, just add size prop to the <ButtonGroup>.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Nesting'
            component={Nesting}
            source={NestingSource}
            noScrollbar
            description='You can place other button types within the <ButtonGroup> like <DropdownButton>s.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Vertical variation'
            component={Vertical}
            source={VerticalSource}
            noScrollbar
            description='Make a set of buttons appear vertically stacked rather than horizontally, by adding vertical to the <ButtonGroup>. Split button dropdowns are not supported here.'
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default ButtonGroups;
