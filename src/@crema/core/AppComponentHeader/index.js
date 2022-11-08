import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import AppAnimateGroup from '../AppAnimateGroup';
import {Button} from 'react-bootstrap';

const AppComponentHeader = ({title, description, refUrl}) => {
  return (
    <AppAnimateGroup type='top' height='auto' interval={100} duration={450}>
      <div
        className='d-flex flex-column pb-3 flex-sm-row justify-content-sm-between pt-xxl-3'
        key={'header'}>
        <div className={styles.headerTitle}>
          <h3 className={styles.titleH3}>{title}</h3>
          {description ? (
            <h5 className={styles.textBase}>{description}</h5>
          ) : null}
        </div>
        {refUrl ? (
          <div style={{height: 30}}>
            <Button variant='primary' href={refUrl} target='_blank'>
              Reference
            </Button>
          </div>
        ) : null}
      </div>
    </AppAnimateGroup>
  );
};

export default AppComponentHeader;

AppComponentHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  refUrl: PropTypes.string,
};
AppComponentHeader.defaultProps = {};
