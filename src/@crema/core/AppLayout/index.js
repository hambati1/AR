import React, {useEffect} from 'react';
import {useUrlSearchParams} from 'use-url-search-params';
import styles from './layout.module.scss';
import AppContentView from '@crema/core/AppContentView';
import Layouts from './Layouts';
import AppScrollbar from '../AppScrollbar';
import {
  useLayoutActionsContext,
  useLayoutContext,
} from '../../utility/AppContextProvider/LayoutContextProvider';
import {useAuthUser} from '../../utility/AuthHooks';
import {useSidebarActionsContext} from '../../utility/AppContextProvider/SidebarContextProvider';
import clsx from 'clsx';

const AppLayout = () => {
  const {isAuthenticated} = useAuthUser();
  const {navStyle} = useLayoutContext();
  const {updateNavStyle} = useLayoutActionsContext();
  const {updateMenuStyle, setSidebarBgImage} = useSidebarActionsContext();
  const [params] = useUrlSearchParams();

  const AppLayout = Layouts[navStyle];

  useEffect(() => {
    if (params.layout) updateNavStyle(params.layout);
    if (params.menuStyle) updateMenuStyle(params.menuStyle);
    if (params.sidebarImage) setSidebarBgImage(true);
  }, []);

  return (
    <React.Fragment>
      {isAuthenticated ? (
        <AppLayout />
      ) : (
        <div className={clsx(styles.auth, 'd-flex flex-column min-vh-100')}>
          <AppScrollbar className={clsx(styles.authScroll, 'd-flex flex-column min-vh-100')}>
            <AppContentView />
          </AppScrollbar>
        </div>
      )}
    </React.Fragment>
  );
};

export default React.memo(AppLayout);
