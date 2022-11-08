import React from 'react';
import IntlMessages from '../../../utility/IntlMessages';
import themeColorSets from '../../../../shared/constants/ColorSets';
import CustomColorCell from '../CustomColorCell';
import {
  useThemeActionsContext,
  useThemeContext,
} from '../../../utility/AppContextProvider/ThemeContextProvider';
import AppGrid from '../../AppGrid';
import styles from './index.module.scss';

const ThemeColors = () => {
  const {theme} = useThemeContext();

  const {updateTheme} = useThemeActionsContext();

  const updateThemeColors = () => {
    // theme.palette.primary.main = colorSet.primary.main;
    // theme.palette.secondary.main = colorSet.secondary.main;
    // theme.palette.background = colorSet.background;
    // theme.palette.mode = colorSet.mode;
    // theme.palette.text = colorSet.text;
    updateTheme({...theme});
  };
  return (
    <div className={styles.themeColorSetting}>
      <h4 className={styles.themeColorSettingTitle}>
        <IntlMessages id='customizer.themeColors' />
      </h4>
      <AppGrid
        data={themeColorSets}
        itemPadding={5}
        responsive={{
          xs: 1,
          sm: 2,
        }}
        renderItem={(colorSet, index) => (
          <CustomColorCell
            key={index}
            updateThemeColors={updateThemeColors}
            themeColorSet={colorSet}
          />
        )}
      />
    </div>
  );
};

export default ThemeColors;
