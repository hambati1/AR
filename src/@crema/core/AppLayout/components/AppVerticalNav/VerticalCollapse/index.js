import React, {useEffect, useMemo, useState} from 'react';
import {Collapse} from 'react-collapse';
import {useLocation} from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import VerticalItem from '../VerticalItem';
import IntlMessages from '../../../../../utility/IntlMessages';
import {checkPermission} from '../../../../../utility/helper/RouteHelper';
import {useAuthUser} from '../../../../../utility/AuthHooks';
import {useSidebarContext} from '../../../../../utility/AppContextProvider/SidebarContextProvider';
import {
  MdChevronLeft,
  MdChevronRight,
  MdOutlineExpandMore,
} from 'react-icons/md';
import styles from './index.module.scss';
import {NavStyle} from '../../../../../../shared/constants/AppEnums';
import miniStyle from '../../../MiniSidebar/index.module.scss';
import {useLayoutContext} from '../../../../../utility/AppContextProvider/LayoutContextProvider';
import miniToggleStyle from '../../../MiniSidebarToggle/index.module.scss';
import miniHeaderToggleStyle from '../../../UserMiniHeader/index.module.scss';
import {useThemeContext} from '../../../../../utility/AppContextProvider/ThemeContextProvider';

const needsToBeOpened = (pathname, item) => {
  return pathname && isUrlInChildren(item, pathname);
};

const isUrlInChildren = (parent, url) => {
  if (!parent.children) {
    return false;
  }

  for (let i = 0; i < parent.children.length; i++) {
    if (parent.children[i].children) {
      if (isUrlInChildren(parent.children[i], url)) {
        return true;
      }
    }

    if (
      parent.children[i].url === url ||
      url.includes(parent.children[i].url)
    ) {
      return true;
    }
  }

  return false;
};

const VerticalCollapse = ({item, level}) => {
  const {sidebarTextColor} = useSidebarContext();
  const {direction} = useThemeContext();
  const {pathname} = useLocation();
  const {navStyle} = useLayoutContext();
  const [open, setOpen] = useState(() => needsToBeOpened(pathname, item));

  useEffect(() => {
    if (needsToBeOpened(pathname, item)) {
      setOpen(true);
    }
  }, [pathname, item]);

  const handleClick = () => {
    setOpen(!open);
  };

  const {user} = useAuthUser();
  const hasPermission = useMemo(
    () => checkPermission(item.permittedRole, user.role),
    [item.permittedRole, user.role],
  );

  if (!hasPermission) {
    return null;
  }

  return (
    <>
      <span
        className={clsx(
          styles.menuVerticalCollapse,
          navStyle === NavStyle.MINI ? miniStyle.miniMenuVerticalItem : '',
          navStyle === NavStyle.MINI_SIDEBAR_TOGGLE
            ? miniToggleStyle.miniMenuVerticalItem
            : '',
          navStyle === NavStyle.HEADER_USER_MINI
            ? miniHeaderToggleStyle.userMiniHeaderMenuVerticalItem
            : '',
          open && 'open',
        )}
        style={{
          color: `rgba(${sidebarTextColor}, 0.7)`,
          //   &.active, &.open {
          //   background-color: ${sidebarMenuSelectedBgColor},
          //   color: ${sidebarMenuSelectedTextColor} !important;
          // }
        }}
        onClick={handleClick}>
        {item.icon && (
          <span
            color='action'
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
          <span
            style={{
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              fontSize: 14,
            }}
            className={styles.navItemText}>
            {<IntlMessages id={item.messageId} />}
          </span>
          <span
            className={clsx(
              styles.navItemIconArrow,
              'me-1 d-inline-block ms-auto',
            )}>
            {open ? (
              <MdOutlineExpandMore />
            ) : direction === 'ltr' ? (
              <MdChevronRight />
            ) : (
              <MdChevronLeft />
            )}
          </span>
        </span>
      </span>

      {item.children && (
        <Collapse
          isOpened={open}
          theme={{
            collapse: clsx(styles.subMenuCollapse, open ? styles.open : ''),
            content: 'collapse-children',
          }}>
          {item.children.map((item) => (
            <React.Fragment key={item.id}>
              {item.type === 'collapse' && (
                <VerticalCollapse item={item} level={level + 1} />
              )}

              {item.type === 'item' && (
                <VerticalItem item={item} level={level + 1} />
              )}
            </React.Fragment>
          ))}
        </Collapse>
      )}
    </>
  );
};

VerticalCollapse.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    permittedRole: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    children: PropTypes.array,
    messageId: PropTypes.string,
    type: PropTypes.string,
  }),
  level: PropTypes.number,
};
VerticalCollapse.defaultProps = {};

export default React.memo(VerticalCollapse);
