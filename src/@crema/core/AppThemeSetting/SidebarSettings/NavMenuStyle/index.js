import React from 'react';
import IntlMessages from '../../../../utility/IntlMessages';
import {menuStyles} from '../../../../services/db/navigationStyle';
import {
  useSidebarActionsContext,
  useSidebarContext,
} from '../../../../utility/AppContextProvider/SidebarContextProvider';
import AppSelectedIcon from '../../../AppSelectedIcon';
import styles from './index.module.scss';
import clsx from 'clsx';

const NavMenuStyle = () => {
  const {menuStyle} = useSidebarContext();

  const {updateMenuStyle} = useSidebarActionsContext();
  const onMenuStyleChange = (menuStyle) => {
    updateMenuStyle(menuStyle);
  };

  return (
    <div className={styles.customizeItem}>
      <h3>
        <IntlMessages id='customizer.sidebarSettings' />
      </h3>
      <div className={styles.customizeItem}>
        <h4>
          <IntlMessages id='customizer.menuStyle' />
        </h4>
        <div
          className={clsx(
            styles.navMenuStyle,
            'd-flex align-items-center flex-wrap',
          )}>
          {menuStyles.map((menu) => {
            return (
              <div className={styles.navMenuStyleItem} style={{}} key={menu.id}>
                <div
                  className={styles.navMenuStyleItemCur}
                  onClick={() => onMenuStyleChange(menu.alias)}>
                  <img src={menu.image} alt='nav' />
                  {menuStyle === menu.alias ? <AppSelectedIcon /> : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavMenuStyle;
