import React from 'react';
import Introduction from './Introduction';
import Team from './Team';
import { aboutUsData } from '@crema/services/db/extraPages/aboutUs';
import Sections from './Sections';
import AppRowContainer from '@crema/core/AppRowContainer';
import { Col } from 'react-bootstrap';
import AppPageMetadata from '@crema/core/AppPageMetadata';

const AboutUs = () => {
  const brandingData = aboutUsData.find((about) => about.alias === 'branding');
  const photoGraphyData = aboutUsData.find(
    (about) => about.alias === 'photography',
  );
  const seoData = aboutUsData.find((about) => about.alias === 'seo');
  const FileImportDetailsData = aboutUsData.find((about) => about.alias === 'nDetails');
  const PredicitveAnalyticsData = aboutUsData.find((about) => about.alias === 'PredicitveAnalytics');
  const geoDetectData = aboutUsData.find((about) => about.alias === 'geoDetect');
  const selfServiceBIData = aboutUsData.find((about) => about.alias === 'selfServiceBI');
  const loremipsumData = aboutUsData.find((about) => about.alias === 'loremipsum');
  return (
    <AppRowContainer type='bottom'>
      <AppPageMetadata title='About us' />
      <Col xs={12} md={12} key='a'>
        <Introduction />
      </Col>

      <Col xs={12} lg={3} key='b'>
        <Sections data={brandingData} />
      </Col>

      <Col xs={12} lg={3} key='c'>
        <Sections data={photoGraphyData} />
      </Col>

      <Col xs={12} lg={3} key='d'>
        <Sections data={seoData} />
      </Col>
      <Col xs={12} lg={3} key='e'>
        <Sections data={nonCitizenDetailsData} />
      </Col>
      <Col xs={12} lg={3} key='f'>
        <Sections data={PredicitveAnalyticsData} />
      </Col>
      <Col xs={12} lg={3} key='g'>
        <Sections data={geoDetectData} />
      </Col>
      <Col xs={12} lg={3} key='h'>
        <Sections data={selfServiceBIData} />
      </Col>
      <Col xs={12} lg={3} key='i'>
        <Sections data={loremipsumData} />
      </Col>

      {/* <Col xs={12} md={12} key='e'>
        <Team />
      </Col> */}
    </AppRowContainer>
  );
};

export default AboutUs;
