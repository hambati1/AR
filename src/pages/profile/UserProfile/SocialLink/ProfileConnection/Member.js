import React, {useState} from 'react';
import AppCard from '@crema/core/AppCard';
import {Button} from 'react-bootstrap';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import clsx from 'clsx';

const Member = ({member}) => {
  const [connect, setConnect] = useState(false);

  const onConnect = () => {
    setConnect(!connect);
  };

  const onDisconnect = () => {
    setConnect(!connect);
  };

  return (
    <AppCard heightFull className={styles.memberCard}>
      <h4 className={clsx(styles.memberCardTitle, 'mb-3')}>{member.title}</h4>
      {connect ? (
        <div className='d-flex'>
          <div className={styles.memberInfoContent}>
            <Button
              variant='primary'
              className={styles.memberBtn}
              onClick={onConnect}>
              Connect
            </Button>
          </div>
        </div>
      ) : (
        <div className='d-flex'>
          <div className={styles.memberThumb}>
            <img src={member.image} alt={member.username} />
          </div>
          <div className={styles.memberInfoContent}>
            <h5>{member.username}</h5>
            <Button
              type='primary'
              className={styles.disconnectBtn}
              onClick={onDisconnect}>
              Disconnect
            </Button>
          </div>
        </div>
      )}
    </AppCard>
  );
};

export default Member;

Member.propTypes = {
  member: PropTypes.object,
};
