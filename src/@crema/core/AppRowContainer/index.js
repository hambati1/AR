import React from 'react';
import styles from './index.module.scss';
import PropTypes from 'prop-types';
import AppAnimateGroup from '../AppAnimateGroup';
import {Row} from 'react-bootstrap';

const AppRow = (props) => <Row className={styles.row} {...props} />;

const AppRowContainer = ({children, ...others}) => {
  return (
    <AppAnimateGroup
      animateStyle={{flexDirection: 'row'}}
      component={AppRow}
      type='bottom'
      ease='easeInOutQuart'
      height='auto'
      {...others}>
      {children}
    </AppAnimateGroup>
  );
};

export default AppRowContainer;
AppRowContainer.propTypes = {
  children: PropTypes.node,
};
