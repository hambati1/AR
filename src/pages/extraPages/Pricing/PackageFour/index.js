import React from 'react';
import PropTypes from 'prop-types';
import PackageCard from './PackageCard';
import AppRowContainer from '@crema/core/AppRowContainer';
import AppCard from '@crema/core/AppCard';
import styles from './index.module.scss';
import {Col} from 'react-bootstrap';

const PackageFour = ({pricing}) => {
  return (
    <AppCard title='Pricing Package Style 4' className='align-items-center'>
      <div className={styles.packageFourRow}>
        <AppRowContainer>
          {pricing.map((data, index) => (
            <Col item xs={12} md={6} lg={4} key={index}>
              <PackageCard pricing={data}/>
            </Col>
          ))}
        </AppRowContainer>
      </div>
    </AppCard>
  );
};

export default PackageFour;

PackageFour.propTypes = {
  pricing: PropTypes.array,
};
