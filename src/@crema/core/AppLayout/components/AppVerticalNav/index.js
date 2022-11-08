import React from 'react';

import NavVerticalGroup from './VerticalNavGroup';
import VerticalCollapse from './VerticalCollapse';
import VerticalItem from './VerticalItem';
import routesConfig from '../../../../../pages/routeConfig';

const VerticalNav = () => {
  return (
    <div className='position-relative pt-2'>
      {routesConfig.map((item) => (
        <React.Fragment key={item.id}>
          {item.type === 'group' && <NavVerticalGroup item={item} level={0} />}

          {item.type === 'collapse' && (
            <VerticalCollapse item={item} level={0} />
          )}

          {item.type === 'item' && <VerticalItem item={item} level={0} />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default VerticalNav;
