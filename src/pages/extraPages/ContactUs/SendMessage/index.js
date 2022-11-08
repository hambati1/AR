import React from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

const SendMessage = ({sendMessage}) => {
  return (
    <div className={styles.sendMessage}>
      <h3 className={styles.sendMessageTitle}>
        <IntlMessages id='extraPages.sendUsMessage' />
      </h3>
      <p>{sendMessage.description}</p>
    </div>
  );
};

export default SendMessage;

SendMessage.propTypes = {
  sendMessage: PropTypes.object,
};
