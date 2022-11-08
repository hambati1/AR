import React, {useMemo} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import IntlMessages from '../../../../../utility/IntlMessages';
import {checkPermission} from '../../../../../utility/helper/RouteHelper';
import {useAuthUser} from '../../../../../utility/AuthHooks';
import {NavLink, useLocation} from 'react-router-dom';
import {Badge} from 'react-bootstrap';
import {useSidebarContext} from '../../../../../utility/AppContextProvider/SidebarContextProvider';
import {MenuStyle, NavStyle} from '../../../../../../shared/constants/AppEnums';
import styles from './index.module.scss';
import {useLayoutContext} from '../../../../../utility/AppContextProvider/LayoutContextProvider';
import miniStyle from '../../../MiniSidebar/index.module.scss';
import miniToggleStyle from '../../../MiniSidebarToggle/index.module.scss';
import miniHeaderToggleStyle from '../../../UserMiniHeader/index.module.scss';

const VerticalItem = ({level, item}) => {
  const {user} = useAuthUser();
  const {pathname} = useLocation();
  const {isSidebarBgImage} = useSidebarContext();
  const hasPermission = useMemo(
    () => checkPermission(item.permittedRole, user.role),
    [item.permittedRole, user.role],
  );
  if (!hasPermission) {
    return null;
  }
  const {sidebarColorSet, menuStyle} = useSidebarContext();
  const {navStyle} = useLayoutContext();
  const {
    sidebarBgColor,
    sidebarTextColor,
    sidebarMenuSelectedBgColor,
    sidebarMenuSelectedTextColor,
  } = sidebarColorSet;
  return (
    <NavLink
      className={clsx(
        styles.menuVerticalItem,
        menuStyle === MenuStyle.STANDARD ? styles.standardMenu : '',
        menuStyle === MenuStyle.ROUNDED ? styles.roundedMenu : '',
        menuStyle === MenuStyle.ROUNDED_REVERSE
          ? styles.roundedMenuReverse
          : '',
        pathname === item.url ? styles.active : '',
        navStyle === NavStyle.MINI ? miniStyle.miniMenuVerticalItem : '',
        navStyle === NavStyle.MINI_SIDEBAR_TOGGLE
          ? miniToggleStyle.miniMenuVerticalItem
          : '',
        navStyle === NavStyle.HEADER_USER_MINI
          ? miniHeaderToggleStyle.userMiniHeaderMenuVerticalItem
          : '',
      )}
      style={{
        paddingLeft: 22 + 36 * level,
        color:
          pathname === item.url
            ? sidebarMenuSelectedTextColor
            : sidebarTextColor,
        backgroundColor:
          pathname === item.url ? sidebarMenuSelectedBgColor : isSidebarBgImage ? '' : sidebarBgColor,
      }}
      level={level}
      to={item.url}
      activeClassName={styles.active}
      exact={item.exact}>
      {item.icon && (
        <span
          className={clsx(
            styles.navItemIcon,
            navStyle === NavStyle.MINI ? miniStyle.navItemIcon : '',
            navStyle === NavStyle.MINI_SIDEBAR_TOGGLE
              ? miniToggleStyle.navItemIcon
              : '',
            navStyle === NavStyle.HEADER_USER_MINI
              ? miniHeaderToggleStyle.navItemIcon
              : '',
          )}>
          {item.icon}
        </span>
      )}
      <span
        className={clsx(
          styles.navItemContent,
          navStyle === NavStyle.MINI ? miniStyle.navItemContent : '',
          navStyle === NavStyle.MINI_SIDEBAR_TOGGLE
            ? miniToggleStyle.navItemContent
            : '',
          navStyle === NavStyle.HEADER_USER_MINI
            ? miniHeaderToggleStyle.navItemContent
            : '',
        )}>
        <span className={styles.navItemText}>
          {<IntlMessages id={item.messageId} />}
        </span>
        {item.count && (
          <Badge className={clsx(styles.navBadge, 'me-3')} bg={item.color}>
            {item.count}{' '}
          </Badge>
        )}
      </span>
    </NavLink>
  );
};

VerticalItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    permittedRole: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    exact: PropTypes.bool,
    messageId: PropTypes.string,
    count: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    url: PropTypes.string,
    color: PropTypes.string,
  }),
  level: PropTypes.number,
};

VerticalItem.defaultProps = {};

export default React.memo(VerticalItem);
