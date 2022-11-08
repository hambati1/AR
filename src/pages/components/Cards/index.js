import React from 'react';
import AppComponentHeader from '@crema/core/AppComponentHeader';
import AppRowContainer from '@crema/core/AppRowContainer';
import {Col} from 'react-bootstrap';
import AppComponentCard from '@crema/core/AppComponentCard';

import Basic from './Basic';
import BasicSource from '!raw-loader!./Basic';
import Body from './Body';
import BodySource from '!raw-loader!./Body';
import Title from './Title';
import TitleSource from '!raw-loader!./Title';
import List from './List';
import ListSource from '!raw-loader!./List';
import Groups from './Groups';
import GroupsSource from '!raw-loader!./Groups';
import Kitchen from './Kitchen';
import KitchenSource from '!raw-loader!./Kitchen';
import Header from './Header';
import HeaderSource from '!raw-loader!./Header';
import Quote from './Quote';
import QuoteSource from '!raw-loader!./Quote';
import Featured from './Featured';
import FeaturedSource from '!raw-loader!./Featured';
import Image from './Image';
import ImageSource from '!raw-loader!./Image';
import Overlays from './Overlays';
import OverlaysSource from '!raw-loader!./Overlays';
import Navigation from './Navigation';
import NavigationSource from '!raw-loader!./Navigation';
import NavigationColor from './NavigationColor';
import NavigationColorSource from '!raw-loader!./NavigationColor';
import Background from './Background';
import BackgroundSource from '!raw-loader!./Background';
import Border from './Border';
import BorderSource from '!raw-loader!./Border';
import CardGroups from './CardGroups';
import CardGroupsSource from '!raw-loader!./CardGroups';
import Grid from './Grid';
import GridSource from '!raw-loader!./Grid';

const Cards = () => {
  return (
    <>
      <AppComponentHeader
        title='Cards'
        description='Bootstrap’s cards provide a flexible and extensible content container with multiple variants and options.'
        refUrl='https://react-bootstrap.github.io/components/cards/'
      />

      <AppRowContainer>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Basic Example'
            component={Basic}
            source={BasicSource}
            noScrollbar
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Kitchen Sink'
            component={Kitchen}
            source={KitchenSource}
            noScrollbar
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Header and Footer'
            component={Header}
            source={HeaderSource}
            noScrollbar
            description='You may add a header by adding a <Card.Header> component.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Title, text, and links'
            component={Title}
            source={TitleSource}
            noScrollbar
            description='Using <Card.Title>, <Card.Subtitle>, and <Card.Text> inside the <Card.Body> will line them up nicely. <Card.Link>s are used to line up links next to each other.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Body'
            component={Body}
            source={BodySource}
            noScrollbar
            description='Use <Card.Body> to pad content inside a <Card>.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='List Groups'
            component={List}
            source={ListSource}
            noScrollbar
            description='Create lists of content in a card with a flush list group.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='List Groups2'
            component={Groups}
            source={GroupsSource}
            noScrollbar
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Header and Footer2'
            component={Quote}
            source={QuoteSource}
            noScrollbar
          />
        </Col>
        <Col xs={12}>
          <AppComponentCard
            title='Featured'
            component={Featured}
            source={FeaturedSource}
            noScrollbar
          />
        </Col>
        <Col xs={12}>
          <AppComponentCard
            title='Image caps'
            component={Image}
            source={ImageSource}
            description='Similar to headers and footers, cards can include top and bottom “image caps”—images at the top or bottom of a card.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Navigation'
            component={Navigation}
            source={NavigationSource}
            noScrollbar
            description='Add some navigation to a card’s header (or block) with React Bootstrap’s Nav components.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Navigation2'
            component={NavigationColor}
            source={NavigationColorSource}
            noScrollbar
            description='Add some navigation to a card’s header (or block) with React Bootstrap’s Nav components.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Image Overlays'
            component={Overlays}
            source={OverlaysSource}
            noScrollbar
            description='Turn an image into a card background and overlay your card’s text. Depending on the image, you may or may not need additional styles or utilities.'
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Background Color'
            component={Background}
            source={BackgroundSource}
            noScrollbar
            description='You can change a cards appearance by changing their <bg>, and <text> props. '
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Border Color'
            component={Border}
            source={BorderSource}
            noScrollbar
          />
        </Col>
        <Col xs={12} md={6}>
          <AppComponentCard
            title='Card Groups'
            component={CardGroups}
            source={CardGroupsSource}
            noScrollbar
          />
        </Col>
        <Col xs={12}>
          <AppComponentCard
            title='Grid cards'
            component={Grid}
            source={GridSource}
            description='Use Rows grid column props to control how many cards to show per row.'
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Cards;
