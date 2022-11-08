import React, {useState} from 'react';
import {layoutTypes, navStyles} from '../../services/db/navigationStyle';
import clsx from 'clsx';
import IntlMessages from '../../utility/IntlMessages';
import {LayoutType, ThemeDirection} from '../../../shared/constants/AppEnums';
import AppScrollbar from '../AppScrollbar';
import styles from './index.module.scss';
import {FiSettings} from 'react-icons/fi';
import {useLayoutActionsContext, useLayoutContext,} from '../../utility/AppContextProvider/LayoutContextProvider';
import SidebarSettings from './SidebarSettings';
import {Button, Offcanvas} from 'react-bootstrap';
import {AiOutlineCheck} from 'react-icons/ai';
import PropTypes from "prop-types";

const AppThemeSetting = ({className}) => {
  const [open, setCustomizerStatus] = useState(false);

  const {
    navStyle,
    direction,
    footer,
    layoutType,
  } = useLayoutContext();

  const {setFooter, updateDirection, updateNavStyle, updateLayoutType} =
    useLayoutActionsContext();

  const onLayoutChange = (layoutType) => {
    updateLayoutType(layoutType);
  };
  const onNavStyleChange = (navStyle) => {
    updateNavStyle(navStyle);
  };

  const onChangeRtlSetting = (e) => {
    updateDirection(e.target.checked ? ThemeDirection.RTL : ThemeDirection.LTR);
  };

  return (
    <div className={clsx(styles.customizerOption, className)}>
      <Button
        className={styles.customizerBtn}
        onClick={() => setCustomizerStatus(!open)}>
        <FiSettings className='ant-spin-dot-spin' style={{fontSize: 20}}/>
      </Button>
      <Offcanvas
        show={open}
        onHide={() => setCustomizerStatus(false)}
        placement='end'
        className={clsx(styles.customizeDrawer, 'customize-drawer', {
          boxedDrawer: layoutType === LayoutType.BOXED,
        })}>
        <Offcanvas.Body className='p-0'>
          <AppScrollbar>
            <div className={styles.customizeHeader}>
              <h3>
                <IntlMessages id='customizer.customiseTheme'/>
              </h3>
              <p>
                <IntlMessages id='customizer.customiseText'/>
              </p>
            </div>
            <div className={styles.customizeMain}>
              <SidebarSettings/>

              <div className={styles.customizeItem}>
                <div className='d-flex align-items-center justify-content-between'>
                  <h4 className='mb-0'>
                    <IntlMessages id='customizer.rtlSupport'/>
                  </h4>
                  <div className='form-check form-switch'>
                    <input
                      checked={direction === ThemeDirection.RTL}
                      onChange={onChangeRtlSetting}
                      className={clsx(styles.formSwitchInput, 'form-check-input')}
                      type='checkbox'
                      id='flexSwitchCheckDefault'
                    />
                  </div>
                </div>
              </div>

              <div className={styles.customizeItem}>
                <h4>
                  <IntlMessages id='customizer.navigationStyles'/>
                </h4>
                <div
                  className={clsx(
                    styles.customizeNavOption,
                    'd-flex align-items-center flex-wrap',
                  )}>
                  {navStyles.map((navLayout) => {
                    return (
                      <div
                        className={styles.customizeNavOptionItem}
                        key={navLayout.id}>
                        <div
                          className={styles.customizeNavOptionContent}
                          onClick={() => onNavStyleChange(navLayout.alias)}>
                          <img src={navLayout.image} alt='nav'/>
                          {navStyle === navLayout.alias ? (
                            <span
                              className={clsx(
                                styles.customizeNavOptionRightIcon,
                                'd-flex align-items-center justify-content-center',
                              )}>
                              <AiOutlineCheck/>
                            </span>
                          ) : null}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className={styles.customizeItem}>
                <h4>
                  <IntlMessages id='customizer.layoutTypes'/>
                </h4>
                <div
                  className={clsx(
                    styles.customizeNavOption,
                    'd-flex align-items-center flex-wrap',
                  )}>
                  {layoutTypes.map((layout) => {
                    return (
                      <div
                        className={styles.customizeNavOptionItem}
                        key={layout.id}>
                        <div
                          className={styles.customizeNavOptionContent}
                          onClick={() => onLayoutChange(layout.alias)}>
                          <img
                            className='layout-img'
                            src={layout.image}
                            alt='nav'
                          />
                          {layoutType === layout.alias ? (
                            <span
                              className={clsx(
                                styles.customizeNavOptionRightIcon,
                                'd-flex align-items-center justify-content-center',
                              )}>
                              <AiOutlineCheck/>
                            </span>
                          ) : null}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className={styles.customizeItem}>
                <div className='d-flex align-items-center justify-content-between mb-1'>
                  <h4 className='mb-0'>Footer</h4>
                  <div className='form-check form-switch'>
                    <input
                      checked={footer}
                      onChange={(e) => setFooter(e.target.checked)}
                      className={clsx(styles.formSwitchInput, 'form-check-input')}
                      type='checkbox'
                      id='flexSwitchCheckDefault'
                    />
                  </div>
                </div>
              </div>
            </div>
          </AppScrollbar>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default AppThemeSetting;

AppThemeSetting.propTypes = {
  className: PropTypes.string,
};
