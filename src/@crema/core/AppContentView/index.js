import React from 'react';
import AppSuspense from '@crema/core/AppSuspense';
import {
  anonymousStructure,
  authorizedStructure,
  unAuthorizedStructure,
} from '../../../pages';
import AppErrorBoundary from '../AppErrorBoundary';
import styles from './index.module.scss';
import generateRoutes from '../../utility/RouteGenerator';
import {useAuthUser} from '../../utility/AuthHooks';
import {Route, Switch} from 'react-router-dom';
import Error404 from '../../../pages/errorPages/Error404';
import clsx from 'clsx';
import PropTypes from "prop-types";

const AppContentView = ({className}) => {
  const {user, isAuthenticated} = useAuthUser();
  return (
    <div
      className={clsx(
        styles.mainContentView,
        'flex-grow-1 d-flex flex-column main-content-view',
        className
      )}>
      <AppSuspense>
        <AppErrorBoundary>
          <Switch>
            {generateRoutes({
              isAuthenticated: isAuthenticated,
              userRole: user?.role,
              unAuthorizedStructure,
              authorizedStructure,
              anonymousStructure,
            })}
            <Route path='/'>
              <Error404 />
            </Route>
          </Switch>
        </AppErrorBoundary>
      </AppSuspense>
    </div>
  );
};

export default AppContentView;

AppContentView.propTypes = {
  className: PropTypes.string,
};
