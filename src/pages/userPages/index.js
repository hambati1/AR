import React from 'react';

export const userPagesConfig = [
  {
    path: '/extra-pages/user/sign-in-1',
    component: React.lazy(() => import('./UserPages/Signin')),
  },
  {
    path: '/extra-pages/user/sign-in-2',
    component: React.lazy(() => import('./StyledUserPages/Signin')),
  }
];
