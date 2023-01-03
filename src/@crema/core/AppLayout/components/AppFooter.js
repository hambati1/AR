import React from 'react';
import styles from './AppFooter.module.scss';
import {useLayoutContext} from '../../../utility/AppContextProvider/LayoutContextProvider';
import {Button} from 'react-bootstrap';
import clsx from 'clsx';
import PropTypes from "prop-types";

const AppFooter = ({className}) => {
  const {footer} = useLayoutContext();

  if (footer) {
    return (
      <div className={clsx(styles.appMainFooter, 'd-flex align-items-center appMainFooter', className)}>
        <h4>@ PNG Telecommunications, Inc. All rights reserved.</h4>
      </div>
    );
  }
  return null;
};

export default AppFooter;

AppFooter.propTypes = {
  className: PropTypes.string,
};
