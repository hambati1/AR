import React from 'react';
import {RoutePermittedRole} from '../../shared/constants/AppEnums';

export const menuPagesConfigs = [
  {
    permittedRole: RoutePermittedRole.user,
    path: '/menu-pages/File-Import',
    component: React.lazy(() => import('./FileImport/index')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/menu-pages/File-Export',
    component: React.lazy(() => import('./FileExport/index')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/menu-pages/Batch-Payment',
    component: React.lazy(() => import('./BatchPayments/index')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/menu-pages/Tax-viewer',
    component: React.lazy(() => import('./TaxViewer/index')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/menu-pages/GLAccount',
    component: React.lazy(() => import('./GLAccount/index')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/menu-pages/Credit-Card-Transaction-Worklist',
    component: React.lazy(() => import('./CreditCard/index')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/menu-pages/Search',
    component: React.lazy(() => import('./Search/index')),
  },
];
