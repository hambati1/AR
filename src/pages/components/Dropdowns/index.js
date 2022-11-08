import React from 'react';
import AppComponentHeader from '@crema/core/AppComponentHeader';
import AppRowContainer from '@crema/core/AppRowContainer';
import {Col} from 'react-bootstrap';
import AppComponentCard from '@crema/core/AppComponentCard';

import Examples from './Examples';
import ExamplesSource from '!raw-loader!./Examples';
import Split from './Split';
import SplitSource from '!raw-loader!./Split';
import Dark from './Dark';
import DarkSource from '!raw-loader!./Dark';
import Sizing from './Sizing';
import SizingSource from '!raw-loader!./Sizing';
import UsingDemo from './UsingDemo';
import UsingDemoSource from '!raw-loader!./UsingDemo';
import Drop from './Drop';
import DropSource from '!raw-loader!./Drop';
import Items from './Items';
import ItemsSource from '!raw-loader!./Items';
import MenuAlignment from './MenuAlignment';
import MenuAlignmentSource from '!raw-loader!./MenuAlignment';
import Responsive from './Responsive';
import ResponsiveSource from '!raw-loader!./Responsive';
import MenuHeaders from './MenuHeaders';
import MenuHeadersSource from '!raw-loader!./MenuHeaders';
import MenuDividers from './MenuDividers';
import MenuDividersSource from '!raw-loader!./MenuDividers';
import AutoClose from './AutoClose';
import AutoCloseSource from '!raw-loader!./AutoClose';
import CustomizationDemo from './CustomizationDemo';
import CustomizationDemoSource from '!raw-loader!./CustomizationDemo';

const Dropdowns = () => {
  return (
    <>
      <AppComponentHeader
        title='Dropdowns'
        description='Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin'
        refUrl='https://react-bootstrap.github.io/components/dropdowns/'
      />

      <AppRowContainer>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Single button dropdowns'
            component={Examples}
            source={ExamplesSource}
            noScrollbar
            description='The basic Dropdown is composed of a wrapping Dropdown and inner <DropdownMenu>, and <DropdownToggle>. By default the <DropdownToggle> will render a Button component and accepts all the same props.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Split Button'
            component={Split}
            source={SplitSource}
            noScrollbar
            description='As with DropdownButton, SplitButton is provided as convenience component.'
          />
        </Col>

        <Col xs={12} md={6}>
          <AppComponentCard
            title='Sizing'
            component={Sizing}
            source={SizingSource}
            noScrollbar
            description='Dropdowns work with buttons of all sizes.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Dark dropdowns'
            component={Dark}
            source={DarkSource}
            noScrollbar
            description='Opt into darker dropdowns to match a dark navbar or custom style by adding variant="dark" onto an existing DropdownMenu. Alternatively, use menuVariant="dark" when using the DropdownButton component.'
          />
        </Col>

        <Col xs={12} md={6}>
          <AppComponentCard
            title='Dark dropdowns 2'
            component={UsingDemo}
            source={UsingDemoSource}
            noScrollbar
            description='Using menuVariant="dark" in a NavDropdown:'
          />
        </Col>

        <Col xs={12} md={6}>
          <AppComponentCard
            title='Drop directions'
            component={Drop}
            source={DropSource}
            noScrollbar
            description='Trigger dropdown menus above, below, left, or to the right of their toggle elements, with the drop prop.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Dropdown items'
            component={Items}
            source={ItemsSource}
            noScrollbar
            description='Historically dropdown menu contents had to be links, but that’s no longer the case with v4. Now you can optionally use <button> elements in your dropdowns instead of just <a>s.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Menu Alignment'
            component={MenuAlignment}
            source={MenuAlignmentSource}
            noScrollbar
            description='By default, a dropdown menu is aligned to the left, but you can switch it by passing align="end" to a <Dropdown>, <DropdownButton>, or <SplitButton>.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Responsive'
            component={Responsive}
            source={ResponsiveSource}
            noScrollbar
            description='If you want to use responsive menu alignment, pass an object containing a breakpoint to the align prop on the <DropdownMenu>, <DropdownButton>, or <SplitButton>. You can specify start or end for the various breakpoints.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='AutoClose'
            component={AutoClose}
            source={AutoCloseSource}
            noScrollbar
            description='By default, the dropdown menu is closed when selecting a menu item or clicking outside of the dropdown menu. This behaviour can be changed by using the autoClose property.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Menu Headers'
            component={MenuHeaders}
            source={MenuHeadersSource}
            noScrollbar
            description='Add a header to label sections of actions.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Menu Dividers'
            component={MenuDividers}
            source={MenuDividersSource}
            noScrollbar
            description='Separate groups of related menu items with a divider.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Customization'
            component={CustomizationDemo}
            source={CustomizationDemoSource}
            noScrollbar
            description='If the default handling of the dropdown menu and toggle components arent to your liking you can customize them by using the more basic <Dropdown> Component to explicitly specify the Toggle and Menu components '
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Dropdowns;
