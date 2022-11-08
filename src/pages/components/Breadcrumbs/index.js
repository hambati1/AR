import React from 'react';
import AppComponentHeader from '@crema/core/AppComponentHeader';
import AppRowContainer from '@crema/core/AppRowContainer';
import {Col} from 'react-bootstrap';
import AppComponentCard from '@crema/core/AppComponentCard';

import Example from './Example';
import ExampleSource from '!raw-loader!./Example';

const Breadcrumbs = () => {
  return (
    <>
      <AppComponentHeader
        title='Breadcrumbs'
        description='Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS. Add active prop to active Breadcrumb.Item . Do not set both active and href attributes. active overrides href and span element is rendered instead of a .'
        refUrl='https://react-bootstrap.github.io/components/breadcrumb/'
      />

      <AppRowContainer>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Example'
            component={Example}
            source={ExampleSource}
            noScrollbar
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Breadcrumbs;
