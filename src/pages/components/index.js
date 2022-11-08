import {RoutePermittedRole} from '../../shared/constants/AppEnums';
import React from 'react';

export const componentConfigs = [
  {
    permittedRole: RoutePermittedRole.user,
    path: '/components/alert',
    component: React.lazy(() => import('./Alert')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/components/accordion',
    component: React.lazy(() => import('./Accordion')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/components/badges',
    component: React.lazy(() => import('./Badge')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/components/bread-crumbs',
    component: React.lazy(() => import('./Breadcrumbs')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/components/buttons',
    component: React.lazy(() => import('./Buttons')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/components/button-groups',
    component: React.lazy(() => import('./ButtonGroups')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/components/cards',
    component: React.lazy(() => import('./Cards')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/components/carousels',
    component: React.lazy(() => import('./Carousels')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/components/close-button',
    component: React.lazy(() => import('./CloseButton')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/components/drop-downs',
    component: React.lazy(() => import('./Dropdowns')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/components/figures',
    component: React.lazy(() => import('./Figures')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/components/forms',
    component: React.lazy(() => import('./Forms')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/components/input-group',
    component: React.lazy(() => import('./InputGroup')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/components/images',
    component: React.lazy(() => import('./Images')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/components/list-groups',
    component: React.lazy(() => import('./ListGroups')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/components/modals',
    component: React.lazy(() => import('./Modals')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/components/navs',
    component: React.lazy(() => import('./Navs')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/components/navbars',
    component: React.lazy(() => import('./Navbars')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/components/offcanvas',
    component: React.lazy(() => import('./Offcanvas')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/components/overlays',
    component: React.lazy(() => import('./Overlays')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/components/pagination',
    component: React.lazy(() => import('./Pagination')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/components/place-holders',
    component: React.lazy(() => import('./PlaceHolders')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/components/progress',
    component: React.lazy(() => import('./Progress')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/components/spinners',
    component: React.lazy(() => import('./Spinners')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/components/tables',
    component: React.lazy(() => import('./Tables')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/components/tabs',
    component: React.lazy(() => import('./Tabs')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/components/toasts',
    component: React.lazy(() => import('./Toasts')),
  },
];
