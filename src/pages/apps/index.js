import React from 'react';
import {Redirect} from 'react-router-dom';
import {RoutePermittedRole} from 'shared/constants/AppEnums';
export const appsConfig = [
  {
    path: ['/apps/contact/folder/:name', '/apps/contact/label/:name'],
    component: React.lazy(() => import('./Contact')),
  },
  {
    path: '/apps/contact',
    component: () => <Redirect to='/apps/contact/folder/all' />,
  },
];
