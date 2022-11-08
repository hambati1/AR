import React from 'react';
import {Col} from 'react-bootstrap';
import AppRowContainer from '@crema/core/AppRowContainer';
import Member from './Member';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import IntlMessages from '@crema/utility/IntlMessages';
import clsx from 'clsx';

const ProfileConnection = ({profileConnection}) => {
  return (
    <div className={clsx(styles.profileConnection, 'position-relative')}>
      <h3 className={clsx(styles.profileConnectionTitle, 'mb-3')}>
        <IntlMessages id='userProfile.profileConnections' />
      </h3>
      <AppRowContainer gutter={16}>
        {profileConnection.map((member, index) => {
          return (
            <Col key={index} xs={12} md={6} lg={4} xl={6} xxl={6}>
              <div className='position-relative h-100'>
                <Member member={member} />
              </div>
            </Col>
          );
        })}
      </AppRowContainer>
    </div>
  );
};

export default ProfileConnection;

ProfileConnection.propTypes = {
  profileConnection: PropTypes.array,
};
