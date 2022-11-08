import React from 'react';
import PropTypes from 'prop-types';
import PackageCard from './PackageCard';
import AppRowContainer from '@crema/core/AppRowContainer';
import AppCard from '@crema/core/AppCard';
import styles from './index.module.scss';
import {Col} from 'react-bootstrap';

const PackageTwo = ({pricing}) => {
  return (
    <AppCard title='Pricing Package Style 2' className='align-items-center'>
      <div className={styles.packageTwoRow}>
        <AppRowContainer>
          {pricing.map((data, index) => (
            <Col xs={12} md={6} lg={4} key={index}>
              <PackageCard pricing={data}/>
            </Col>
          ))}
        </AppRowContainer>
      </div>
    </AppCard>
  );
};

export default PackageTwo;

PackageTwo.propTypes = {
  pricing: PropTypes.array,
};
