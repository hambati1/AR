import React from 'react';
import AppRowContainer from '@crema/core/AppRowContainer';
import {Col} from 'react-bootstrap';
import PackageTwo from './PackageTwo';
import pricingData from '@crema/services/db/extraPages/pricing';
import PackageOne from './PackageOne';
import PackageThree from './PackageThree';
import PackageFour from './PackageFour';

const Pricing = () => {
  return (
    <AppRowContainer>
      <Col xs={12}>
        <PackageOne pricing={pricingData.pricingOne} />
      </Col>
      <Col xs={12}>
        <PackageTwo pricing={pricingData.pricingTwo} />
      </Col>
      <Col xs={12}>
        <PackageThree pricing={pricingData.pricingFour} />
      </Col>
      <Col xs={12}>
        <PackageFour pricing={pricingData.pricingFour} />
      </Col>
    </AppRowContainer>
  );
};

export default Pricing;
