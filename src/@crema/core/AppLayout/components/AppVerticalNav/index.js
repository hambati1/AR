import React from 'react';

import NavVerticalGroup from './VerticalNavGroup';
import VerticalCollapse from './VerticalCollapse';
import VerticalItem from './VerticalItem';
import routesConfig from '../../../../../pages/routeConfig';

const VerticalNav = () => {
 const test = ()=>{
    console.log('test')
  }
  return (
    <div className='position-relative pt-2'>
      {/* {routesConfig.map((item) => ( */}
        <React.Fragment >
          {/* {item.type === 'group' && <NavVerticalGroup item={item} level={0} />}

          {item.type === 'collapse' && (
            <VerticalCollapse item={item} level={0}  onclick={()=>{console.log("test")}}/>
          )} */}

          {/* {item.type === 'item' &&  */}
          <VerticalItem  level={0} />
          {/* } */}
        </React.Fragment>
      {/* ))} */}
    </div>
  );
};

export default VerticalNav;
