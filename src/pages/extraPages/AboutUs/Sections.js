import React from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import {Button, Card} from 'react-bootstrap';
import styles from './index.module.scss';

const Sections = ({data}) => {
  return (
    <Card className={styles.aboutSectionCard}>
      <div className={styles.cardBodyContent}>
        <div className='d-flex align-items-center flex-column mb-3'>
          <div
            className={styles.aboutSectionAvatar}
            style={{
              backgroundColor: data.avatarColor,
            }}>
            {data.icon}
          </div>
        </div>
        <h2>{data.title}</h2>

        <p>{data.content}</p>

        {/* <Button variant='outline-dark' className={styles.readBtn}>
          <IntlMessages id='dashboard.readMore' />
        </Button> */}
      </div>
    </Card>
  );
};

export default Sections;

Sections.propTypes = {
  data: PropTypes.object.isRequired,
};
