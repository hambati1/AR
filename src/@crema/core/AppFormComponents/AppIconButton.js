import React from 'react';
import PropTypes from 'prop-types';

const AppIconButton = ({children}) => {
  return <div>{children}</div>;
};

export default AppIconButton;

AppIconButton.propTypes = {
  children: PropTypes.node,
};
