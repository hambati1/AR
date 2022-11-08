import React from 'react';
import PropTypes from 'prop-types';
import IntlMessages from '../../utility/IntlMessages';
import styles from './index.module.scss';
import {Button} from 'react-bootstrap';
import clsx from 'clsx';

const AppEmptyResult = ({title, description, actionTitle, onAction}) => {
  return (
    <div
      className={clsx(
        styles.emptyResult,
        'flex-grow-1 d-flex flex-column align-items-center justify-content-center w-100 h-100',
      )}>
      <h4 className={styles.emptyResultTitle}>{title}</h4>
      {description ? <p className={styles.paraText}>{description}</p> : null}
      {actionTitle ? (
        <Button className={styles.emptyResultBtn} onClick={onAction}>
          {actionTitle}
        </Button>
      ) : null}
    </div>
  );
};

export default AppEmptyResult;

AppEmptyResult.defaultProps = {
  title: <IntlMessages id='common.noRecordFound' />,
  description: '',
};

AppEmptyResult.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  actionTitle: PropTypes.string,
  onAction: PropTypes.func,
};
