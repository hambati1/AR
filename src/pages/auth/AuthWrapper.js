import React from 'react';
import PropTypes from 'prop-types';
import AppAnimateGroup from '@crema/core/AppAnimateGroup';
import styles from './AuthWrapper.module.scss';
import AppInfoView from '@crema/core/AppInfoView';
import AppLogo from '@crema/core/AppLayout/components/AppLogo';
import {Card} from 'react-bootstrap';
import clsx from 'clsx';
import {ReactComponent as Logo} from '../auth/Signin/login.svg';

const AuthWrapper = ({children}) => {
  return (
    <AppAnimateGroup
      type='scale'
      animateStyle={{flex: 1}}
      delay={0}
      interval={10}
      duration={200}>
      <div
        className='flex-grow-1 flex-column justify-content-center align-items-center'
        key={'wrap'}>
        <Card className={clsx(styles.authCardLogin, 'd-flex flex-row')}>
          <div className={clsx(styles.authMainContent, 'd-flex flex-column')}>
            <div className='mb-3 mb-md-4 d-flex justify-content-center'>
              <AppLogo />
            </div>
            {children}
          </div>
          <div
            className={clsx(
              styles.userStyledImg,
              'h-auto w-50 d-inline-block ',
            )}>
            <Logo />
          </div>
        </Card>
      </div>
      <AppInfoView />
    </AppAnimateGroup>
  );
};

export default AuthWrapper;

AuthWrapper.propTypes = {
  children: PropTypes.node,
};
