import React from 'react';
import PropTypes from 'prop-types';
import {Row} from 'react-bootstrap';
import styles from './index.module.scss';

const AppRowSimpleContainer = ({children}) => {
  return <Row className={styles.row}>{children}</Row>;
};

export default AppRowSimpleContainer;
AppRowSimpleContainer.propTypes = {
  children: PropTypes.node,
};
