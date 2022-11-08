import React from 'react';
import AppComponentHeader from '@crema/core/AppComponentHeader';
import AppRowContainer from '@crema/core/AppRowContainer';
import {Col} from 'react-bootstrap';
import AppComponentCard from '@crema/core/AppComponentCard';

import TablesDemo from './TablesDemo';
import TablesDemoSource from '!raw-loader!./TablesDemo';
import Small from './Small';
import SmallSource from '!raw-loader!./Small';
import Dark from './Dark';
import DarkSource from '!raw-loader!./Dark';
import Responsive from './Responsive';
import ResponsiveSource from '!raw-loader!./Responsive';
import Breakpoint from './Breakpoint';
import BreakpointSource from '!raw-loader!./Breakpoint';

const Tables = () => {
  return (
    <>
      <AppComponentHeader
        title='Tables'
        description=''
        refUrl='https://react-bootstrap.github.io/components/table/'
      />

      <AppRowContainer>
        <Col xs={12}>
          <AppComponentCard
            title='Tables'
            component={TablesDemo}
            source={TablesDemoSource}
            noScrollbar
            description='Use the striped, bordered and hover props to customise the table.'
          />
        </Col>
        <Col xs={12}>
          <AppComponentCard
            title='Small'
            component={Small}
            source={SmallSource}
            noScrollbar
            description='Use the striped, bordered and hover props to customise the table.'
          />
        </Col>
        <Col xs={12}>
          <AppComponentCard
            title='Dark'
            component={Dark}
            source={DarkSource}
            noScrollbar
            description='Use variant="dark" to invert the colors of the table and get light text on a dark background.'
          />
        </Col>
        <Col xs={12}>
          <AppComponentCard
            title='Always Responsive'
            component={Responsive}
            source={ResponsiveSource}
            noScrollbar
            description='Responsive tables allow tables to be scrolled horizontally with ease.'
          />
        </Col>
        <Col xs={12}>
          <AppComponentCard
            title='Breakpoint specific'
            component={Breakpoint}
            source={BreakpointSource}
            noScrollbar
            description='Use responsive="sm", responsive="md", responsive="lg", or responsive="xl" as needed to create responsive tables up to a particular breakpoint. From that breakpoint and up, the table will behave normally and not scroll horizontally.'
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Tables;
