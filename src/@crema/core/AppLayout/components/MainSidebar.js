import React from 'react';
import {useSidebarContext} from '../../../utility/AppContextProvider/SidebarContextProvider';
import PropTypes from 'prop-types';

const MainSidebar = ({children, className, ...props}) => {
  const {sidebarColorSet, isSidebarBgImage, sidebarBgImage} =
    useSidebarContext();

  return (
    <div
      className={className}
      style={{
        backgroundColor: sidebarColorSet.sidebarBgColor,
        color: sidebarColorSet.sidebarTextColor,
        backgroundImage: isSidebarBgImage
          ? `url(/assets/images/sidebar/images/${sidebarBgImage}.png)`
          : '',
      }}
      {...props}>
      {children}
    </div>
  );
};

export default MainSidebar;
MainSidebar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.any,
};
