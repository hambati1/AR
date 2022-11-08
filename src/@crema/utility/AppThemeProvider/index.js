import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useLayoutContext} from '../AppContextProvider/LayoutContextProvider';
import {ThemeProvider} from 'react-bootstrap';
import {ThemeDirection} from '../../../shared/constants/AppEnums';

const AppThemeProvider = (props) => {
  const {direction, } = useLayoutContext();
  /*  const {themeMode, } = useThemeContext();
    useEffect(() => {
      // Accessing scss variable "--background-color"
      // and "--text-color" using plain JavaScript
      // and changing the same according to the state of "darkTheme"
      const root = document.documentElement;
      root?.style.setProperty(
        "--bs-body-bg",
        themeMode===ThemeMode.DARK ? "#262833" : "#fff"
      );
      root?.style.setProperty("--bs-body-color", themeMode===ThemeMode.DARK ? "#fff" : "#262833");
    }, [themeMode]);*/

  useEffect(() => {
    document.body.setAttribute('dir', direction);
    document.body.setAttribute('lang', direction === ThemeDirection.LTR ? 'en' : 'ar');
  }, [direction]);

  return <ThemeProvider dir={direction}>{props.children}</ThemeProvider>;
};

export default React.memo(AppThemeProvider);

AppThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
