import React from 'react';
import styles from './index.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {Table} from 'react-bootstrap';

const AppTableContainer = (props) => {
  const {className, children, ...rest} = props;

  return (
    <Table responsive className={clsx(styles.table, className)} {...rest}>
      {children}
    </Table>
  );
};

export default AppTableContainer;

AppTableContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
