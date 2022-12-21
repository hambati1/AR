import {errorPagesConfigs} from './errorPages';
import {authRouteConfig} from './auth';
import {initialUrl} from '../shared/constants/AppConst';
import {Redirect} from 'react-router-dom';
import Error403 from './errorPages/Error403';
import React from 'react';
import {componentConfigs} from './components';
import {extraPagesConfigs} from './extraPages';
import {menuPagesConfigs} from './menupages'
import {searchConfigs} from './SearchWorklist'

const authorizedStructure = {
  fallbackPath: '/signin',
  unAuthorizedComponent: <Error403 />,
  routes: [
    ...componentConfigs,
    ...extraPagesConfigs,
    ...errorPagesConfigs,
    ...menuPagesConfigs,
    ...searchConfigs
  ],
};

const unAuthorizedStructure = {
  fallbackPath: initialUrl,
  routes: authRouteConfig,
}; 

const anonymousStructure = {
  routes: errorPagesConfigs.concat([
    {
      path: '/',
      exact: true,
      component: () => <Redirect to={initialUrl} />,
    },
  ]),
};

export {authorizedStructure, unAuthorizedStructure, anonymousStructure};
