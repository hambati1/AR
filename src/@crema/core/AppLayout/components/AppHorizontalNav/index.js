import React from 'react';
import HorizontalGroup from './HorizontalGroup';
import HorizontalCollapse from './HorizontalCollapse';
import HorizontalItem from './HorizontalItem';
import {ListGroup} from "react-bootstrap";
import routesConfig from "../../../../../pages/routeConfig";
import styles from './index.module.scss'
import PropTypes from "prop-types";
import clsx from "clsx";

const HorizontalNav = ({className}) => {
  return (
    <ListGroup className={clsx(styles.appHorizontalNav, className)}>
      {routesConfig.map((item) => (
        <React.Fragment key={item.id}>
          {item.type === 'group' && (
            <HorizontalGroup item={item} nestedLevel={0} />
          )}

          {item.type === 'collapse' && (
            <HorizontalCollapse item={item} nestedLevel={0} />
          )}

          {item.type === 'item' && (
            <HorizontalItem item={item} nestedLevel={0} />
          )}

        </React.Fragment>
      ))}
    </ListGroup>
  );
};

export default HorizontalNav;

HorizontalNav.propTypes = {
  className: PropTypes.string,
};
