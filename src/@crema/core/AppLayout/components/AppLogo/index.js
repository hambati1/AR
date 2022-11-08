import React from 'react';
import styles from './index.module.scss';
import PropTypes from 'prop-types';
import {useSidebarContext} from '../../../../utility/AppContextProvider/SidebarContextProvider';
import clsx from 'clsx';

const AppLogo = ({hasSidebarColor}) => {
  const {sidebarColorSet} = useSidebarContext();
  return (
   <div   className={clsx(styles.modulesLogofield, 'modulesLogofield')}>
    <div className={clsx(styles.modulesLogo, 'modulesLogo')}>
    <img  src='/assets/images/png_Modules.svg' alt='crema-logo'/>     
    </div>
    <div className={clsx(styles.appLogo, 'app-logo')}>
      
      {hasSidebarColor && sidebarColorSet.mode === 'dark' ? (
        <>
          <img className='d-none d-sm-block' src='/assets/images/Powernet_logo.png' alt='crema-logo'/>
          <img className='d-sm-none' src='/assets/images/Powernet_logo.png' alt='crema-logo'/>
        </>
      ) : (
        <>
          <img className='d-none d-sm-block' src='/assets/images/Powernet_logo.png' alt='crema-logo'/>
          <img className='d-sm-none' src='/assets/images/Powernet_logo.png' alt='crema-logo'/>
        </>
      )}
    </div>
    </div>
  );
};

export default AppLogo;

AppLogo.propTypes = {
  hasSidebarColor: PropTypes.bool,
};
