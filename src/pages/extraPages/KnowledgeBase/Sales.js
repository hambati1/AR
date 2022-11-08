import React from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import KBItem from './KBItem';
import PropTypes from 'prop-types';
import AppRowContainer from '@crema/core/AppRowContainer';
import styles from './index.module.scss';

const Sales = ({saleQueries}) => {
  return (
    <div className={styles.knowSale}>
      <h3 className={styles.knowSectionHeading}>
        <IntlMessages id='knowledge.sales' />
      </h3>
      <AppRowContainer>
        {saleQueries.map((sale, index) => (
          <KBItem data={sale} key={index} />
        ))}
      </AppRowContainer>
    </div>
  );
};

export default Sales;

Sales.propTypes = {
  saleQueries: PropTypes.array.isRequired,
};
