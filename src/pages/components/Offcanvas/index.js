import React from 'react';
import AppComponentHeader from '@crema/core/AppComponentHeader';
import AppRowContainer from '@crema/core/AppRowContainer';
import {Col} from 'react-bootstrap';
import AppComponentCard from '@crema/core/AppComponentCard';

import Basic from './Basic';
import BasicSource from '!raw-loader!./Basic';
import Placement from './Placement';
import PlacementSource from '!raw-loader!./Placement';
import Backdrop from './Backdrop';
import BackdropSource from '!raw-loader!./Backdrop';

const Offcanvas = () => {
  return (
    <>
      <AppComponentHeader
        title='Offcanvas'
        description='Build hidden sidebars into your project for navigation, shopping carts, and more.'
        refUrl='https://react-bootstrap.github.io/components/offcanvas/'
      />

      <AppRowContainer>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Basic Example'
            component={Basic}
            source={BasicSource}
            noScrollbar
            description='Offcanvas includes support for a header with a close button and an optional body class for some initial padding.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Placement'
            component={Placement}
            source={PlacementSource}
            noScrollbar
            description='Offcanvas supports a few different placements:'
          />
        </Col>
        <Col xs={12}>
          <AppComponentCard
            title='Backdrop'
            component={Backdrop}
            source={BackdropSource}
            noScrollbar
            description='Offcanvas supports a few different placements:'
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Offcanvas;
