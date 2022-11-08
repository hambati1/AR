import React from 'react';
import AppComponentHeader from '@crema/core/AppComponentHeader';
import AppRowContainer from '@crema/core/AppRowContainer';
import {Col} from 'react-bootstrap';
import AppComponentCard from '@crema/core/AppComponentCard';

import Basic from './Basic';
import BasicSource from '!raw-loader!./Basic';
import Links from './Links';
import LinksSource from '!raw-loader!./Links';
import Additional from './Additional';
import AdditionalSource from '!raw-loader!./Additional';
import Dismissing from './Dismissing';
import DismissingSource from '!raw-loader!./Dismissing';
import Hows from './Hows';
import HowsSource from '!raw-loader!./Hows';

const Alert = () => {
  return (
    <>
      <AppComponentHeader
        title='Alerts'
        description='Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.'
        refUrl='https://react-bootstrap.github.io/components/alerts/'
      />

      <AppRowContainer>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Basic Examples'
            component={Basic}
            source={BasicSource}
            noScrollbar
            description='Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the eight variants.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Links'
            component={Links}
            source={LinksSource}
            noScrollbar
            description='For links, use the <Alert.Link> component to provide matching colored links within any alert.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Additional content'
            component={Additional}
            source={AdditionalSource}
            noScrollbar
            description='Alerts can contain whatever content you like. Headers, paragraphs, dividers, go crazy.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Dismissing'
            component={Dismissing}
            source={DismissingSource}
            noScrollbar
            description='Add the dismissible prop to add a functioning dismiss button to the Alert.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Dismissing 2'
            component={Hows}
            source={HowsSource}
            noScrollbar
            description='You can also control the visual state directly which is great if you want to build more complicated alerts.'
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Alert;
