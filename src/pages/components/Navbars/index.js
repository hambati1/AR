import React from 'react';
import AppComponentHeader from '@crema/core/AppComponentHeader';
import AppRowContainer from '@crema/core/AppRowContainer';
import {Col} from 'react-bootstrap';
import AppComponentCard from '@crema/core/AppComponentCard';

import Overview from './Overview';
import OverviewSource from '!raw-loader!./Overview';
import Brand from './Brand';
import BrandSource from '!raw-loader!./Brand';
import Text from './Text';
import TextSource from '!raw-loader!./Text';
import Color from './Color';
import ColorSource from '!raw-loader!./Color';
import Containers from './Containers';
import ContainersSource from '!raw-loader!./Containers';
import Scrolling from './Scrolling';
import ScrollingSource from '!raw-loader!./Scrolling';
import Responsive from './Responsive';
import ResponsiveSource from '!raw-loader!./Responsive';
import Offcanvas from './Offcanvas';
import OffcanvasSource from '!raw-loader!./Offcanvas';

const Navbars = () => {
  return (
    <>
      <AppComponentHeader
        title='Navbars'
        description='A powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more'
        refUrl='https://react-bootstrap.github.io/components/navbar/'
      />

      <AppRowContainer>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Overview'
            component={Overview}
            source={OverviewSource}
            noScrollbar
            description='Here’s what you need to know before getting started with the Navbar:'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Text and Non-nav links'
            component={Text}
            source={TextSource}
            noScrollbar
            description='Displaying related images and text with the Figure component.'
          />
        </Col>

        <Col xs={12} md={6}>
          <AppComponentCard
            title='Brand'
            component={Brand}
            source={BrandSource}
            noScrollbar
            description='A simple flexible branding component. Images are supported but will likely require custom styling to work well.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Color schemes'
            component={Color}
            source={ColorSource}
            noScrollbar
            description='Theming the navbar has never been easier thanks to the combination of theming classes and background-color utilities.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Containers'
            component={Containers}
            source={ContainersSource}
            noScrollbar
            description='While not required, you can wrap the Navbar in a <Container> component to center it on a page, or add one within to only center the contents of a fixed or static top navbar.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Scrolling'
            component={Scrolling}
            source={ScrollingSource}
            noScrollbar
            description='You can use the navbarScroll prop in a <Nav> to enable vertical scrolling within the toggleable contents of a collapsed navbar.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Responsive behaviors '
            component={Responsive}
            source={ResponsiveSource}
            noScrollbar
            description='Use the expand prop as well as the Navbar.Toggle and Navbar.Collapse components to control when content collapses behind a button.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Offcanvas '
            component={Offcanvas}
            source={OffcanvasSource}
            noScrollbar
            description='Transform your expanding and collapsing navbar into an offcanvas drawer with the offcanvas component. We extend both the offcanvas default styles and use the expand prop to create a dynamic and flexible navigation sidebar.'
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Navbars;
