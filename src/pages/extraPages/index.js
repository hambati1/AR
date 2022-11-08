import React from 'react';
import {RoutePermittedRole} from '../../shared/constants/AppEnums';

export const extraPagesConfigs = [
  {
    permittedRole: RoutePermittedRole.user,
    path: '/extra-pages/user-profile',
    component: React.lazy(() => import('../profile/UserProfile')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/extra-pages/about-us',
    component: React.lazy(() => import('./AboutUs/index')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/extra-pages/contact-us',
    component: React.lazy(() => import('./ContactUs/index')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/extra-pages/knowledge-base',
    component: React.lazy(() => import('./KnowledgeBase/index')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/extra-pages/portfolio',
    component: React.lazy(() => import('./Portfolio/index')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/extra-pages/faq',
    component: React.lazy(() => import('./FAQ/index')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/extra-pages/pricing',
    component: React.lazy(() => import('./Pricing/index')),
  },
];
