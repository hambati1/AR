import React, {useMemo} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import VerticalCollapse from '../VerticalCollapse';
import VerticalItem from '../VerticalItem';
import IntlMessages from '../../../../../utility/IntlMessages';
import {checkPermission} from '../../../../../utility/helper/RouteHelper';
import {useAuthUser} from '../../../../../utility/AuthHooks';
import {useSidebarContext} from '../../../../../utility/AppContextProvider/SidebarContextProvider';
import styles from './index.module.scss';
import {NavStyle} from '../../../../../../shared/constants/AppEnums';
import miniStyle from '../../../MiniSidebar/index.module.scss';
import miniToggleStyle from '../../../MiniSidebarToggle/index.module.scss';
import miniHeaderToggleStyle from '../../../UserMiniHeader/index.module.scss';
import {useLayoutContext} from '../../../../../utility/AppContextProvider/LayoutContextProvider';

const VerticalNavGroup = ({item, level}) => {
  const {sidebarTextColor} = useSidebarContext();
  const {user} = useAuthUser();
  const {navStyle} = useLayoutContext();
  const hasPermission = useMemo(
    () => checkPermission(item.permittedRole, user.role),
    [item.permittedRole, user.role],
  );

  if (!hasPermission) {
    return null;
  }
  return (
    <>
      <div
        className={clsx(
          styles.verticalNavGroup,
          navStyle === NavStyle.MINI ? miniStyle.miniVerticalNavGroup : '',
          navStyle === NavStyle.MINI_SIDEBAR_TOGGLE
            ? miniToggleStyle.miniVerticalNavGroup
            : '',
          navStyle === NavStyle.HEADER_USER_MINI
            ? miniHeaderToggleStyle.userMiniHeaderVerticalNavGroup
            : '',
        )}
        style={{
          color: sidebarTextColor,
          paddingLeft: 31 + 36 * level,
        }}>
        {<IntlMessages id={item.messageId} />}
      </div>

      {item.children && (
        <>
          {item.children.map((item) => (
            <React.Fragment key={item.id}>
              {item.type === 'group' && (
                <NavVerticalGroup item={item} level={level} />
              )}

              {item.type === 'collapse' && (
                <VerticalCollapse item={item} level={level} />
              )}

              {item.type === 'item' && (
                <VerticalItem item={item} level={level} />
              )}
            </React.Fragment>
          ))}
        </>
      )}
    </>
  );
};

VerticalNavGroup.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    type: PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    permittedRole: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    messageId: PropTypes.string,
    children: PropTypes.array,
  }),
  level: PropTypes.number,
};

VerticalNavGroup.defaultProps = {};

const NavVerticalGroup = VerticalNavGroup;

export default NavVerticalGroup;
