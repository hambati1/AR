import React from 'react';
import PropTypes from 'prop-types';
import PackageCard from './PackageCard';
import AppCard from '@crema/core/AppCard';
import AppRowContainer from '@crema/core/AppRowContainer';
import styles from './index.module.scss';
import {Col} from 'react-bootstrap';

const PackageThree = ({pricing}) => {
  return (
    <AppCard title='Pricing Package Style 3' className='align-items-center'>
      <div className={styles.packageThreeRow}>
      <AppRowContainer>
        {pricing.map((data, index) => (
          <Col item xs={12} md={6} lg={4} key={index}>
            <PackageCard pricing={data} />
          </Col>
        ))}
      </AppRowContainer>
      </div>
    </AppCard>
  );
};

export default PackageThree;

PackageThree.propTypes = {
  pricing: PropTypes.array,
};
