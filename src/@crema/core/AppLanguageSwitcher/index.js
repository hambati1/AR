import React from 'react';
import languageData from './data';

import PropTypes from 'prop-types';
import styles from './index.module.scss';
import {ThemeDirection} from '../../../shared/constants/AppEnums';
import {useLocaleActionsContext, useLocaleContext} from '../../utility/AppContextProvider/LocaleContextProvide';
import {useLayoutActionsContext} from '../../utility/AppContextProvider/LayoutContextProvider';
import {IoLanguageOutline} from 'react-icons/io5';
import {Dropdown} from 'react-bootstrap';
import clsx from 'clsx';
import AppIconBtn from "../AppIconBtn";

const AppLanguageSwitcher = ({appIconBtnClass}) => {
  const {rtlLocale, locale} = useLocaleContext();
  const {updateLocale} = useLocaleActionsContext();
  const {updateDirection} = useLayoutActionsContext();

  const changeLanguage = (language) => {
    if (rtlLocale.indexOf(language.locale) !== -1) {
      updateDirection(ThemeDirection.RTL);
    } else {
      updateDirection(ThemeDirection.LTR);
    }
    updateLocale(language);
  };

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle
          id='dropdown-custom-components'
          className={clsx(
            styles.dropdownToggleBtn,
            'p-0 bg-transparent border-0 d-flex align-items-center shadow-none',
          )}>
          <AppIconBtn className={clsx('d-none d-md-flex', appIconBtnClass)}>
            <IoLanguageOutline />
          </AppIconBtn>
          <span className={clsx(styles.languageText, 'd-md-none ms-md-3')} >{locale.name}</span>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {languageData.map((language, index) => (
            <Dropdown.Item
              key={index}
              onClick={() => changeLanguage(language)}
              eventKey={index}>
              <span className={styles.langItem}>
                <i className={`flag flag-24 flag-${language.icon}`} />
                <h4>{language.name}</h4>
              </span>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default AppLanguageSwitcher;

AppLanguageSwitcher.defaultProps = {
  iconOnly: false,
};

AppLanguageSwitcher.propTypes = {
  iconOnly: PropTypes.bool,
  appIconBtnClass: PropTypes.string,
};
