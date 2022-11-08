import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import IntlMessages from '../../../../../utility/IntlMessages';
// import {useSidebarContext} from '../../../../../utility/AppContextProvider/SidebarContextProvider';
import {Badge} from 'react-bootstrap';
import styles from './index.module.scss';

function HorizontalItem(props) {
  const {item, dense} = props;
  const active = isUrlInChildren(item, props.location.pathname);
  // const {sidebarMenuSelectedBgColor, sidebarMenuSelectedTextColor} =
  //   useSidebarContext();

  function isUrlInChildren(parent, url) {
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
  }

  return (
    <NavLink
      to={item.url}
      activeClassName='active'
      className={clsx(styles.horizontalItemNavItem, dense && 'dense')}
      exact={item.exact}>
      {item.icon && (
        <span
          className={styles.horizontalItemNavItemIcon}
          style={{
            color: active ? sidebarMenuSelectedTextColor : '',
          }}>
          {item.icon}
        </span>
      )}
      <span className={styles.horizontalItemNavItemText}>
        {<IntlMessages id={item.messageId} />}
      </span>
      {item.count && (
        <Badge
          className={styles.horizontalItemNavItemBadge}
          count={item.count}
          style={{
            color: item.color,
          }}
        />
      )}
    </NavLink>
  );
}

HorizontalItem.defaultProps = {};

export default withRouter(React.memo(HorizontalItem));

HorizontalItem.propTypes = {
  item: PropTypes.object,
  location: PropTypes.object,
  dense: PropTypes.bool,
};
