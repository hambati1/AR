import React, {useState} from 'react';

import {withRouter} from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {Manager, Popper, Reference} from 'react-popper';
import * as ReactDOM from 'react-dom';
import {ListGroup} from "react-bootstrap";
import IntlMessages from "../../../../../utility/IntlMessages";
import styles from './index.module.scss'
import HorizontalCollapse from "../HorizontalCollapse";
import HorizontalItem from "../HorizontalItem";

function HorizontalGroup(props) {
  const [opened, setOpened] = useState(false);
  const {item, nestedLevel} = props;

  const handleToggle = (open) => {
    setOpened(open);
  };

  function isUrlInChildren(parent, url) {
    if (!parent.children) {
      return false;
    }

    for (let i = 0; i < parent.children.length; i++) {
      if (parent.children[i].children) {
        if (isUrlInChildren(parent.children[i], url)) {
          return true;
        }
      }

      if (
        parent.children[i].url === url ||
        url.includes(parent.children[i].url)
      ) {
        return true;
      }
    }

    return false;
  }

  return (
    <Manager>
      <Reference>
        {({ref}) => (
          <ListGroup.Item
            ref={ref}
            className={clsx(
              styles.horizontalGroupItem,
              isUrlInChildren(item, props.location.pathname) && 'active',
            )}
            onMouseEnter={() => handleToggle(true)}
            onMouseLeave={() => handleToggle(false)}
            aria-owns={opened ? 'menu-list-grow' : null}
            aria-haspopup='true'
          >
            {item.icon && (
              <span className={styles.horizontalGroupItemIcon}>
                {item.icon}
              </span>
            )}
            <span className={styles.horizontalGroupItemText}>
              <IntlMessages id={item.messageId} />
            </span>
            {nestedLevel > 0 && (
                <span
                  className={styles.horizontalGroupItemArrowIcon}
                >
                  keyboard_arrow_right
                </span>
            )}
          </ListGroup.Item>
        )}
      </Reference>
      {ReactDOM.createPortal(
        <Popper
          placement={nestedLevel === 0 ? 'bottom-start' : 'right'}
          eventsEnabled={opened}
          positionFixed
        >
          {({ref, style, placement}) =>
            opened && (
              <span
                ref={ref}
                style={{
                  ...style,
                  boxShadow: '0 0 3px 0 rgba(0, 0, 0, 0.2)',
                  zIndex: 1110 + nestedLevel,
                }}
                data-placement={placement}
                className={clsx({
                  popperClose: !opened,
                })}
              >
                  <div
                    onMouseEnter={() => handleToggle(true)}
                    onMouseLeave={() => handleToggle(false)}
                  >
                    {item.children && (
                      <ListGroup>
                        {item.children.map((item) => (
                          <React.Fragment key={item.id}>
                            {item.type === 'group' && (
                              <HorizontalGroup
                                item={item}
                                nestedLevel={nestedLevel}
                              />
                            )}

                            {item.type === 'collapse' && (
                              <HorizontalCollapse
                                item={item}
                                nestedLevel={nestedLevel}
                              />
                            )}

                            {item.type === 'item' && (
                              <HorizontalItem
                                item={item}
                                nestedLevel={nestedLevel}
                              />
                            )}
                          </React.Fragment>
                        ))}
                      </ListGroup>
                    )}
                  </div>
              </span>
            )
          }
        </Popper>,
        document.querySelector('#root'),
      )}
    </Manager>
  );
}

HorizontalGroup.propTypes = {
  item: PropTypes.object,
  location: PropTypes.object,
  nestedLevel: PropTypes.number,
};

HorizontalGroup.defaultProps = {};

export default withRouter(React.memo(HorizontalGroup));
