import React from 'react';
import {
  sidebarBgImages,
  sidebarColors,
} from '../../../services/db/navigationStyle';
import {
  useSidebarActionsContext,
  useSidebarContext,
} from '../../../utility/AppContextProvider/SidebarContextProvider';
import NavMenuStyle from './NavMenuStyle';
import AppGrid from '../../AppGrid';
import IntlMessages from '../../../utility/IntlMessages';
import MenuColorCell from './MenuColorCell';
import styles from './index.module.scss';
import {AiOutlineCheck} from 'react-icons/ai';
import clsx from 'clsx';

const SidebarSettings = () => {
  const {sidebarBgImage, isSidebarBgImage} = useSidebarContext();

  const {updateSidebarBgImage, setSidebarBgImage} = useSidebarActionsContext();

  const onToggleSidebarImage = () => {
    setSidebarBgImage(!isSidebarBgImage);
  };
  const onUpdateSidebarBgImage = (image) => {
    updateSidebarBgImage(image);
  };

  return (
    <div className={styles.sidebarSetting}>
      <NavMenuStyle />
      <div className={styles.customizeItem}>
        <div
          className={clsx(
            styles.customizeSwitchView,
            'd-flex align-items-center flex-wrap justify-content-between mb-1',
          )}>
          <h4>
            <IntlMessages id='customizer.sidebarImage' />
          </h4>
          <div className='form-check form-switch'>
            <input
              checked={isSidebarBgImage}
              onChange={onToggleSidebarImage}
              className={clsx(styles.formSwitchInput, 'form-check-input')}
              type='checkbox'
              id='flexSwitchCheckDefault'
            />
          </div>
        </div>

        {isSidebarBgImage ? (
          <div
            className={clsx(
              styles.customizeNavOption,
              'd-flex align-items-center flex-wrap',
            )}>
            {sidebarBgImages.map((imagesObj) => {
              return (
                <div
                  className={styles.customizeNavOptionItem}
                  key={imagesObj.id}>
                  <div
                    className={styles.customizeNavOptionContent}
                    onClick={() => onUpdateSidebarBgImage(imagesObj.id)}>
                    <img src={imagesObj.image} alt='nav' />
                    {sidebarBgImage === imagesObj.id ? (
                      <span className={styles.customizeNavOptionRightIcon}>
                        <AiOutlineCheck />
                      </span>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>

      <div className={styles.customizeItem}>
        <h4>Sidebar Colors</h4>
        <AppGrid
          data={sidebarColors}
          column={2}
          itemPadding={5}
          renderItem={(colorSet, index) => (
            <MenuColorCell key={index} sidebarColors={colorSet} />
          )}
        />
      </div>
    </div>
  );
};

export default SidebarSettings;
