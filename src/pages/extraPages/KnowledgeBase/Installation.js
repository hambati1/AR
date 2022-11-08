import React from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import KBItem from './KBItem';
import PropTypes from 'prop-types';
import AppRowContainer from '@crema/core/AppRowContainer';
import styles from './index.module.scss';

const Installation = ({installationQueries}) => {
  return (
    <div className={styles.knowSale}>
      <h3 className={styles.knowSectionHeading}>
        <IntlMessages id='knowledge.installation' />
      </h3>
      <AppRowContainer>
        {installationQueries.map((data) => (
          <KBItem data={data} key={data.id} />
        ))}
      </AppRowContainer>
    </div>
  );
};

export default Installation;

Installation.propTypes = {
  installationQueries: PropTypes.array.isRequired,
};
