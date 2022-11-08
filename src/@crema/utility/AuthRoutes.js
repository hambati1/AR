import React from 'react';
import PropTypes from 'prop-types';
import AppLoader from '../core/AppLoader';
import {useAuthUser} from './AuthHooks';

const AuthRoutes = ({children}) => {
  const {isLoading} = useAuthUser();
  return isLoading ? <AppLoader /> : <>{children}</>;
};

export default AuthRoutes;

AuthRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};
