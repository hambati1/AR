import React from 'react';
import clsx from 'clsx';
import IntlMessages from '../../utility/IntlMessages';
import PropTypes from 'prop-types';
import {Button, ProgressBar} from 'react-bootstrap';
import styles from './index.module.scss';

const ListEmptyResult = ({
  loader,
  placeholder,
  loading,
  title,
  actionTitle,
  content,
  onClick,
}) => {
  if (loading || loader) {
    return (
      <React.Fragment>
        {placeholder ? (
          placeholder
        ) : (
          <div
            className={clsx(
              styles.emptyListContainer,
              'd-flex align-items-center justify-content-center text-center flex-grow-1 h-100',
            )}>
            <ProgressBar percent={30} />
            <span>Loading...</span>
          </div>
        )}
      </React.Fragment>
    );
  } else {
    return (
      <div
        className={clsx(
          styles.emptyListContainer,
          'd-flex align-items-center justify-content-center flex-column text-center flex-grow-1 h-100',
        )}>
        {title ? <h4>{title}</h4> : null}
        <p>{content}</p>

        {actionTitle ? (
          <Button
            type='primary'
            style={{marginTop: 30, minWidth: 150}}
            onClick={onClick}>
            {actionTitle}
          </Button>
        ) : null}
      </div>
    );
  }
};

export default ListEmptyResult;

ListEmptyResult.defaultProps = {
  title: <IntlMessages id='common.noRecordFound' />,
  description: '',
};

ListEmptyResult.prototype = {
  title: PropTypes.string,
  description: PropTypes.string,
  actionTitle: PropTypes.string,
  action: PropTypes.func,
};
