import React from 'react';
import PropTypes from 'prop-types';
import PackageCard from './PackageCard';
import AppCard from '@crema/core/AppCard';
import AppRowContainer from '@crema/core/AppRowContainer';
import styles from './index.module.scss';
import {Col} from 'react-bootstrap';

const PackageOne = ({pricing}) => {
  return (
    <AppCard title='Pricing Package Style 1' className='align-items-center'>
      <div className={styles.packageOneRow}>
        <AppRowContainer>
          {pricing.map((data, index) => (
            <Col xs={12} md={6} lg={4} key={index}>
              <PackageCard pricing={data} />
            </Col>
          ))}
        </AppRowContainer>
      </div>
    </AppCard>
  );
};

export default PackageOne;

PackageOne.propTypes = {
  pricing: PropTypes.array,
};
