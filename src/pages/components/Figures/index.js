import React from 'react';
import AppComponentHeader from '@crema/core/AppComponentHeader';
import AppRowContainer from '@crema/core/AppRowContainer';
import {Col} from 'react-bootstrap';
import AppComponentCard from '@crema/core/AppComponentCard';

import FigureDemo from './FigureDemo';
import FigureDemoSource from '!raw-loader!./FigureDemo';

const Figures = () => {
  return (
    <>
      <AppComponentHeader
        title='Figures'
        description='Anytime you need to display a piece of content, like an image with an optional caption, consider using a Figure.'
        refUrl='https://react-bootstrap.github.io/components/figures/'
      />

      <AppRowContainer>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='FigureDemo'
            component={FigureDemo}
            source={FigureDemoSource}
            noScrollbar
            description='Displaying related images and text with the Figure component.'
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Figures;
