import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';
import {Manager, Popper, Reference} from 'react-popper';
import * as ReactDOM from 'react-dom';
import {ListGroup} from 'react-bootstrap';
import styles from './index.module.scss';
import IntlMessages from '../../../../../utility/IntlMessages';
import HorizontalItem from '../HorizontalItem';
import {useThemeContext} from '../../../../../utility/AppContextProvider/ThemeContextProvider';
import HorizontalGroup from '../HorizontalGroup';

function HorizontalCollapse(props) {
  const [opened, setOpened] = useState(false);
  const {direction} = useThemeContext();
  const {item, nestedLevel, dense} = props;
  const active = isUrlInChildren(item, props.location.pathname);
  // const {sidebarMenuSelectedBgColor, sidebarMenuSelectedTextColor} =
  //   useSidebarContext();

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
    <div className={styles.horizontalCollapseNav}>
      <Manager>
        <Reference>
          {({ref}) => (
            <div
              ref={ref}
              className={clsx(
                styles.horizontalCollapseNavItem,
                opened && 'open',
                dense && 'dense',
                active && 'active',
              )}
              onMouseEnter={() => handleToggle(true)}
              onMouseLeave={() => handleToggle(false)}
              aria-owns={opened ? 'menu-list-grow' : null}
              aria-haspopup='true'>
              {item.icon && (
                <span
                  className={styles.horizontalCollapseNavItemIcon}
                  style={{
                    color: active ? sidebarMenuSelectedTextColor : 'action',
                  }}>
                  {item.icon}
                </span>
              )}
              <span className={styles.horizontalCollapseNavItemText}>
                {<IntlMessages id={item.messageId} />}
              </span>
              <span
                style={{
                  color: active ? sidebarMenuSelectedTextColor : 'action',
                }}>
                {direction === 'ltr' ? <MdChevronRight /> : <MdChevronLeft />}
              </span>
            </div>
          )}
        </Reference>
        {ReactDOM.createPortal(
          <Popper placement='right' eventsEnabled={opened} positionFixed>
            {({ref, style, placement}) =>
              opened && (
                <div
                  ref={ref}
                  style={{
                    boxShadow: '0 0 3px 0 rgba(0, 0, 0, 0.2)',
                    zIndex: 1110 + nestedLevel + 1,
                    ...style,
                  }}
                  data-placement={placement}
                  className={clsx({
                    popperClose: !opened,
                  })}>
                  <div
                    onMouseEnter={() => handleToggle(true)}
                    onMouseLeave={() => handleToggle(false)}>
                    {item.children && (
                      <ListGroup>
                        {item.children.map((item) => (
                          <React.Fragment key={item.id}>
                            {item.type === 'group' && (
                              <HorizontalGroup
                                item={item}
                                nestedLevel={nestedLevel + 1}
                              />
                            )}

                            {item.type === 'collapse' && (
                              <HorizontalCollapse
                                item={item}
                                nestedLevel={nestedLevel + 1}
                                location={props.location}
                              />
                            )}

                            {item.type === 'item' && (
                              <HorizontalItem
                                item={item}
                                nestedLevel={nestedLevel + 1}
                              />
                            )}
                          </React.Fragment>
                        ))}
                      </ListGroup>
                    )}
                  </div>
                </div>
              )
            }
          </Popper>,
          document.querySelector('#root'),
        )}
      </Manager>
    </div>
  );
}

export default withRouter(React.memo(HorizontalCollapse));

HorizontalCollapse.propTypes = {
  item: PropTypes.object,
  nestedLevel: PropTypes.number,
  location: PropTypes.object,
  dense: PropTypes.number,
};

HorizontalCollapse.defaultProps = {};
