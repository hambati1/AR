import React from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import styles from './index.module.scss';
import {BiMessageRoundedDots} from 'react-icons/bi';

const NoUserScreen = () => {
  return (
    <div className='position-relative'>
      <BiMessageRoundedDots className={styles.messageIcon} />
      <p className='mb-0'>
        <IntlMessages id='chatApp.noUser' />
      </p>
    </div>
  );
};

export default NoUserScreen;
