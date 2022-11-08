import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import clsx from 'clsx';
import {Button} from "react-bootstrap";

const AppIconBtn = ({children, className, smallBtn, ...rest}) => {
  return (
    <Button
      className={clsx(styles.appIconBtn, smallBtn ? styles.smallBtn : '', className)}
      {...rest}>
      {children}
    </Button>
  );
};

export default AppIconBtn;

AppIconBtn.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  smallBtn: PropTypes.bool,
};
