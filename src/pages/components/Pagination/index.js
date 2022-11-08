import React from 'react';
import AppComponentHeader from '@crema/core/AppComponentHeader';
import AppRowContainer from '@crema/core/AppRowContainer';
import {Col} from 'react-bootstrap';
import AppComponentCard from '@crema/core/AppComponentCard';

import PaginationDemo from './PaginationDemo';
import PaginationDemoSource from '!raw-loader!./PaginationDemo';

const Pagination = () => {
  return (
    <>
      <AppComponentHeader
        title='Pagination'
        description='Anytime you need to display a piece of content, like an image with an optional caption, consider using a Figure.'
        refUrl='https://react-bootstrap.github.io/components/pagination/'
      />

      <AppRowContainer>
        <Col xs={12}>
          <AppComponentCard
            title='FigureDemo'
            component={PaginationDemo}
            source={PaginationDemoSource}
            noScrollbar
            description='Displaying related images and text with the Figure component.'
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Pagination;
