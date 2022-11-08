import React, {useState} from 'react';
import AppInfoView from '@crema/core/AppInfoView';
import PropTypes from 'prop-types';
import AppSidebar from './AppSidebar';
import clsx from 'clsx';
import styles from './index.module.scss';
import QueueAnim from 'rc-queue-anim';
import {useLayoutContext} from '../../utility/AppContextProvider/LayoutContextProvider';
import {Button, Card} from 'react-bootstrap';
import {AiOutlineMenu} from 'react-icons/ai';

const AppsContainer = (props) => {
  const [isAppDrawerOpen, setAppDrawerOpen] = useState(false);
  const {footer, navStyle} = useLayoutContext();
  const {title, noContentAnimation, sidebarContent, fullView, children} = props;
  return (
    <div className={clsx(styles.appsWrap, 'd-flex flex-column')}>
      <div
        className={clsx(styles.appsWrapHeader, 'd-flex align-items-center', {
          appsWrapHeaderFull: fullView,
        })}>
        {fullView ? null : (
          <Button
            className={styles.menuBtn}
            onClick={() => setAppDrawerOpen(!isAppDrawerOpen)}>
            <AiOutlineMenu />
          </Button>
        )}
        <QueueAnim style={{zIndex: 3, overflow: 'hidden'}} type='scale'>
          <h2 className='text-truncate' key='title'>
            {title}
          </h2>
        </QueueAnim>
      </div>

      <div className={clsx(styles.appsContainer, 'd-flex apps-container')}>
        {sidebarContent ? (
          <QueueAnim
            style={{zIndex: 3}}
            type={props.type ? props.type : 'left'}>
            <AppSidebar
              isAppDrawerOpen={isAppDrawerOpen}
              setAppDrawerOpen={setAppDrawerOpen}
              footer={footer}
              fullView={fullView}
              navStyle={navStyle}
              sidebarContent={sidebarContent}
              key='sidebar'
            />
          </QueueAnim>
        ) : null}
        <div
          className={clsx(
            styles.appsMainContent,
            fullView ? styles.appsMainContentFull : '',
            'd-flex flex-column',
          )}>
          {noContentAnimation ? (
            <Card
              key='content'
              className={clsx(
                styles.card,
                'flex-grow-1 d-flex flex-column h-100 overflow-hidden',
              )}
              style={{
                ...props.cardStyle,
              }}>
              {children}
            </Card>
          ) : (
            <QueueAnim
              type={props.type ? props.type : 'right'}
              style={{minHeight: '100%'}}>
              <Card
                key='content'
                className={clsx(
                  styles.card,
                  'flex-grow-1 d-flex flex-column h-100 overflow-hidden',
                )}
                style={{
                  ...props.cardStyle,
                }}>
                {children}
              </Card>
            </QueueAnim>
          )}

          <AppInfoView />
        </div>
      </div>
    </div>
  );
};

export default AppsContainer;

AppsContainer.defaultProps = {
  title: '',
  noContentAnimation: false,
};

AppsContainer.propTypes = {
  title: PropTypes.string,
  cardStyle: PropTypes.object,
  noContentAnimation: PropTypes.bool,
  sidebarContent: PropTypes.node,
  fullView: PropTypes.bool,
  children: PropTypes.node,
  type: PropTypes.any,
};
