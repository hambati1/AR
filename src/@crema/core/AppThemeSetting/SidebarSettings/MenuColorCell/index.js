import React from 'react';
import PropTypes from 'prop-types';
import {
  useSidebarActionsContext,
  useSidebarContext,
} from '../../../../utility/AppContextProvider/SidebarContextProvider';
import {
  MenuStyle,
  NavStyle,
  ThemeMode,
} from '../../../../../shared/constants/AppEnums';
import clsx from 'clsx';
import {useLayoutContext} from '../../../../utility/AppContextProvider/LayoutContextProvider';
import AppSelectedIcon from '../../../AppSelectedIcon';
import defaultConfig from '../../../../utility/AppContextProvider/defaultConfig';
import styles from './index.module.scss';

const MenuColorCell = ({sidebarColors}) => {
  const {sidebarColorSet, menuStyle} = useSidebarContext();
  const {updateSidebarColorSet} = useSidebarActionsContext();
  const {
    sidebarBgColor,
    sidebarTextColor,
    sidebarMenuSelectedBgColor,
    sidebarMenuSelectedTextColor,
  } = sidebarColorSet;
  const {navStyle} = useLayoutContext();

  return (
    <div
      className={styles.menuColorCell}
      style={{
        border:
          sidebarColors.mode === ThemeMode.LIGHT
            ? `solid 2px ${defaultConfig.sidebar.borderColor}`
            : `solid 2px ${sidebarColors.sidebarBgColor}`,
      }}
      onClick={() => updateSidebarColorSet(sidebarColors)}>
      {navStyle === NavStyle.DEFAULT ? (
        <div
          className={styles.menuColorCellHeader}
          style={{
            backgroundColor: sidebarColors.sidebarHeaderColor,
            borderBottom: `solid 1px ${sidebarColors.sidebarTextColor}`,
          }}>
          <div
            className={styles.menuColorCellHeaderAvatar}
            style={{
              border: `solid 1px ${sidebarColors.sidebarTextColor}`,
            }}
          />
          <div className={styles.menuColorCellHeaderContent}>
            <div
              className={styles.menuColorCellHeaderContentLine}
              style={{
                backgroundColor: sidebarColors.sidebarTextColor,
              }}
            />
            <div
              className={styles.menuColorCellHeaderContentLine}
              style={{
                backgroundColor: sidebarColors.sidebarTextColor,
              }}
            />
          </div>
        </div>
      ) : null}
      <div
        className={styles.menuColorCellContent}
        style={{
          backgroundColor: sidebarColors.sidebarBgColor,
        }}>
        <div
          className={styles.menuColorCellMenuItem}
          style={{
            color: sidebarColors.sidebarTextColor,
          }}>
          Menu-1
        </div>
        <div
          className={styles.menuColorCellMenuItem}
          style={{
            color: sidebarColors.sidebarTextColor,
          }}>
          Menu-2
        </div>
        <div
          className={clsx(
            styles.menuColorCellMenuItem,
            styles.menuColorCellMenuItemSelected,
            menuStyle === MenuStyle.STANDARD ? styles.standardMenu : '',
            menuStyle === MenuStyle.ROUNDED ? styles.roundedMenu : '',
            menuStyle === MenuStyle.ROUNDED_REVERSE
              ? styles.roundedMenuReverse
              : '',
          )}
          style={{
            backgroundColor: sidebarColors.sidebarMenuSelectedBgColor,
            color: sidebarColors.sidebarMenuSelectedTextColor,
          }}>
          Selected Menu
        </div>
        <div
          className={styles.menuColorCellMenuItem}
          style={{
            color: sidebarColors.sidebarTextColor,
          }}>
          Menu-4
        </div>
      </div>
      {sidebarColors.sidebarBgColor === sidebarBgColor &&
      sidebarColors.sidebarTextColor === sidebarTextColor &&
      sidebarColors.sidebarMenuSelectedBgColor === sidebarMenuSelectedBgColor &&
      sidebarColors.sidebarMenuSelectedTextColor ===
        sidebarMenuSelectedTextColor ? (
        <AppSelectedIcon
          isCenter={false}
          backgroundColor={sidebarMenuSelectedBgColor}
          color={sidebarMenuSelectedTextColor}
        />
      ) : null}
    </div>
  );
};

export default MenuColorCell;
MenuColorCell.propTypes = {sidebarColors: PropTypes.object};
