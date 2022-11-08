import React from 'react';
import PropTypes from 'prop-types';
import {Card, Col} from 'react-bootstrap';
import AppScrollbar from '@crema/core/AppScrollbar';
import styles from './index.module.scss';
import clsx from 'clsx';

const KbItem = ({data}) => {
  return (
    <Col xs={12} sm={6} lg={4}>
      <Card className={styles.knowKbCard}>
        <div className={styles.kbCardBody}>
          <h5>{data.ques}</h5>
          <AppScrollbar className={styles.knowKbScrollbar}>
            <p className='mb-0'>{data.ans}</p>
          </AppScrollbar>
          <div className='d-flex align-items-center flex-wrap ms-n2 me-n2'>
            {data.tags.map((tag, index) => {
              return (
                <span className={clsx(styles.knowBadge, 'm-2')} key={index}>
                  {tag}
                </span>
              );
            })}
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default KbItem;

KbItem.propTypes = {
  data: PropTypes.object.isRequired,
};
