import React from 'react';
import {RoutePermittedRole} from '../../shared/constants/AppEnums';

export const searchConfigs = [
  {
    permittedRole: RoutePermittedRole.user,
    path: '/Search-Worklist/Payments',
    component: React.lazy(() => import('./Payments/index')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/Search-Worklist/Adjustments',
    component: React.lazy(() => import('./Adjustments/index')),
  },
 
];
